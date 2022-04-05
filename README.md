# The Zed Docs Website

This repository contains [Docusaurus 2](https://docusaurus.io/)
source and configuration files for generating the static website
for the public documentation of the open-source Zed project.

All content for the documentation is stored in markdown files
in the [`docs` directory](https://github.com/brimdata/zed/tree/main/docs)
of the
[Zed repository](https://github.com/brimdata/zed).

### Setup

To setup the Docusaurus environment, clone this repo, cd into it, and run:
```
$ yarn
```

### Local Development

To edit or author new documentation, it's easiest to clone the zed repository
into the same top-level directory as this repo and simply run `make dev`
in this repo.  This will create a symlink from called `docs` in
this directory that points to `../zed/docs`, launches the local docusaurus
server, and directs your browser to this server.

You can ctrl-C the `make dev` process to stop the server.

Any edits you make to files in ../zed/docs will be immediatedly re-rendered
by the docusaurus server.

### Rendering from zed repo

If you don't have a clone of the zed repo in `..`, you can pull the
zed repo docs directory into the ./docs subdirectory by running:
```bash
make fetch-latest
```
Then you can run the docusaurus server with:
```
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
