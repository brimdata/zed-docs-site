REF = main

.PHONY: fetch
fetch:
	@rm -rf docs tmp
	@mkdir tmp
	@git clone --depth=1 -b $(REF) --single-branch https://github.com/brimdata/zed tmp
	@mv tmp/docs docs
	@rm -rf tmp

.PHONY: build
build: fetch
	@yarn install --frozen-lockfile
	@yarn build
	@echo
	@echo "Fixing asset links with trailing slashes in these files:"
	@echo
	@find build -name \*.html -exec egrep -q '(href="\/assets\/files\/)(\w+)(-[0-9a-f]+)(\.\w+)\/"' {} \; -print -exec perl -i -pe 's/(href="\/assets\/files\/)(\w+)(-[0-9a-f]+)(\.\w+)\/"/download="$$2$$4" $$1$$2$$3$$4"/' {} \;
	@echo
	@echo "Done!"

.PHONY: version
version: fetch
	yarn run docusaurus docs:version $(REF)

.PHONY: dev
dev:
	@rm -rf docs
	@ln -s ../zed/docs
	@yarn start
