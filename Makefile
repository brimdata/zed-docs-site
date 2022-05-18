REF = "main"

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


.PHONY: version
version: fetch
	yarn run docusaurus docs:version $(REF)

.PHONY: dev
dev:
	@rm -rf docs
	@ln -s ../zed/docs
	@yarn start
