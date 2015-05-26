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
├── build
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

##### Developing Spectre

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
1. Build for your platform
  - `gulp electron-[darwin/win/linux]` darwin = OS X, win = Windows, linux = Linux

Your build will be in the `build` folder.

### LICENSE (ISC)

Copyright (c) 2015, Sean-Patrick Ortencio Clayton <sean@seanclayton.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.