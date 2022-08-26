REF = main
LATEST := $(shell python3 -c 'import json; versions = json.load(open("versions.json")); versions.sort(); print(versions[-1])')

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
	@echo "/docs/$(LATEST)/*	/docs/:splat" > build/_redirects

.PHONY: version
version: fetch
	yarn run docusaurus docs:version $(REF)

.PHONY: dev
dev:
	@rm -rf docs
	@ln -s ../zed/docs
	@yarn start
