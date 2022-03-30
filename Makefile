.PHONY: fetch-latest
fetch-latest:
	@rm -rf docs tmp
	@mkdir tmp
	@git clone --depth=1 -b markdown-lint-fixes --single-branch https://github.com/brimdata/zed tmp
	@cp -r tmp/docs docs
	@rm -rf tmp
