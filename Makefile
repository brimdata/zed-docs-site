REF = main

.PHONY: fetch
fetch:
	@rm -rf docs
	@curl -LSfs https://github.com/brimdata/zed/tarball/$(REF) | \
		tar -xf - --include='*/docs' --strip-components=1

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
