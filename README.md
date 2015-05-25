# Spectre
A Destiny Companion App

### Installation

#### Binaries

Binaries can be found in the [release page](https://github.com/sean-clayton/spectre/releases).

#### Source

##### Folder Structure

```
├── LICENSE
├── README.md
├── app
│   ├── app.js
│   ├── index.html
│   ├── index.js
│   └── styles
│       ├── darwin.scss
│       └── main.scss
├── dist
├── bower.json
├── config.json
├── gulpfile.js
└── package.json
```

The [source code](https://github.com/sean-clayton/spectre) is available on [GitHub](https://github.com)

##### Prerequisites

Install the following in this order:

- [Node](https://nodejs.org)
- [NPM](https://nodejs.org) (Installed with Node)
- [Gulp](http://gulpjs.com)
- [Bower](http://bower.io)

##### Building Spectre

1. Clone the repo
  - `git clone git@github.com:sean-clayton/spectre.git`
1. `cd` into the directory
  - `cd spectre`
1. Install dependencies
  - `npm i`
  - `bower i`
1. Run the build tool
  - `gulp build`
    - Builds Spectre to the `dist` folder (refer to [the folder structure](#folder-structure))
  - `gulp electron`
    - Launches an [Electron](https://github.com/atom/electron) instance with `dist` as its source. *Requires `gulp build` to be ran!*
  - `gulp watch`
    - Builds Spectre and launches Electron. Watches for file changes in the `app` folder, then refreshes Electron.