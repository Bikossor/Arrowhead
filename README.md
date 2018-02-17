[![Build Status](https://travis-ci.org/Bikossor/JOSH.svg?branch=master)](https://travis-ci.org/Bikossor/JOSH)
[![npm](https://img.shields.io/npm/dt/@bikossor/josh.svg)](https://www.npmjs.com/package/@bikossor/josh)
[![GitHub release](https://img.shields.io/github/release/bikossor/josh.svg)]()
[![Size](http://img.badgesize.io/https://raw.githubusercontent.com/Bikossor/JOSH/master/dist/JOSH.min.js.svg)]()
[![Gzip size](http://img.badgesize.io/https://raw.githubusercontent.com/Bikossor/JOSH/master/dist/JOSH.min.js.svg?compression=gzip)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6920feb9d5bd4beba85d3f479d61b306)](https://www.codacy.com/app/Bikossor/JOSH?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Bikossor/JOSH&amp;utm_campaign=Badge_Grade)

# JOSH (JavaScript Object Style Helper)
A vanilla JavaScript helper to parse JSON into CSS.

## Why using JOSH?
JOSH is a great helper for any web-project which uses CSS. With JOSH you can include your CSS either as JSON or as a string right into your HTML or JavaScript without having an additional server-request for your CSS. The result is that you just have to keep track to fewer files and even the performance of your web-project benefits too.

## Getting started

### Requirements
- None

### Installing via npm
```
npm install @bikossor/josh
```

### Installing without npm
- Download the latest release of JOSH [here](https://github.com/Bikossor/JOSH/releases/latest). Paste JOSH into your script and you are done.

### Using JOSH with JSON
```html
<script>
  /* Copy JOSH in your JavaScript! */

  JOSH.parse({
    "#foo": {
      "position": "fixed",
      "top": 0,
      "left": 0,
      "background": "#ddd",
      "width": "100%",
      "height": "4rem"
    },
    ".bar": {
      "color": "red",
      "background": "#808080"
    }
  });
</script>
```

### Using JOSH with strings
```html
<script>
  /* Copy JOSH in your JavaScript! */

  JOSH.parse("#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}");
</script>
```

## Versioning
I am using [Semantic Versioning 2.0.0](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Bikossor/JOSH/tags).

## Authors
- André Lichtenthäler ([Bikossor](https://bikossor.de)) - *Initial work*

## License
This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.

## Changelog
### Version 1.0.1 (17th February, 2018)
- [Improved] Security patch (Changed ``==`` to ``===`` and ``innerHTML`` to ``textContent``)

### Version 1.0.0 (8th February, 2018)
- [Added] Auto-appending to either `head` or `body` (Default: `head`)
- [Added] Support for css-string
- [Improved] Error checking

### Version 0.1.0 (27th November, 2017)
- First introduction of JOSH

### Proof of Concept (23rd November, 2017)