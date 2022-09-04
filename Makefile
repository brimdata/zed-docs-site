REF = main
LATEST = $(shell jq -r '.[0]' versions.json)

.PHONY: fetch
fetch:
	@rm -rf docs tmp
	@mkdir tmp
	@git clone --depth=1 -b $(REF) --single-branch https://github.com/brimdata/zed tmp
	@mv tmp/docs docs
	@rm -rf tmp
	@git clone --depth=1 -b zuifi-wiki --single-branch https://github.com/brimdata/brim tmpzui
	@mv tmpzui/docs zui
	@rm -rf tmpzui

.PHONY: build
build: fetch
	@yarn install --frozen-lockfile
	@yarn build
	@echo "/docs/$(LATEST)/*        /docs/:splat" > build/_redirects

.PHONY: version
version: fetch
	yarn run docusaurus docs:version $(REF)

.PHONY: dev
dev:
	@rm -rf docs
	@ln -s ../zed/docs
	@yarn start
