.PHONY: build
build: fetch-latest
	@yarn install --frozen-lockfile
	@yarn build


.PHONY: fetch-latest
fetch-latest:
	@rm -rf docs tmp
	@mkdir tmp
	@git clone --depth=1 -b main --single-branch https://github.com/brimdata/zed tmp
	@mv tmp/docs docs
	@rm -rf tmp

.PHONY: dev
dev:
	@rm -rf docs
	@ln -s ../zed/docs
	@yarn start
