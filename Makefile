.PHONY: build
build: fetch-latest
	@yarn install --frozen-lockfile
	@yarn build


.PHONY: fetch-latest
fetch-latest:
	@rm -rf docs tmp
	@mkdir tmp
	@git clone --depth=1 -b markdown-lint-fixes --single-branch https://github.com/brimdata/zed tmp
	@mv tmp/docs docs
	@rm -rf tmp
