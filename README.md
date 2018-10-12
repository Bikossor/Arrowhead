[![Build Status](https://travis-ci.org/Bikossor/Arrowhead.svg?branch=master)](https://travis-ci.org/Bikossor/Arrowhead)
[![npm](https://img.shields.io/npm/dt/arrowhead.svg)](https://www.npmjs.com/package/@bikossor/Arrowhead)
[![GitHub release](https://img.shields.io/github/release/bikossor/Arrowhead.svg)]()
[![Size](http://img.badgesize.io/https://raw.githubusercontent.com/Bikossor/Arrowhead/master/dist/Arrowhead.min.js.svg)]()
[![Gzip size](http://img.badgesize.io/https://raw.githubusercontent.com/Bikossor/Arrowhead/master/dist/Arrowhead.min.js.svg?compression=gzip)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6920feb9d5bd4beba85d3f479d61b306)](https://www.codacy.com/app/Bikossor/Arrowhead?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Bikossor/Arrowhead&amp;utm_campaign=Badge_Grade)

# Arrowhead
A vanilla JavaScript helper to parse JSON into CSS.
Formerly known as JOSH.

## Why using Arrowhead?
Arrowhead is a great helper for any web-project which uses CSS. With Arrowhead you can include your CSS either as JSON or as a string right into your HTML or JavaScript without having an additional server-request for your CSS. The result is that you just have to keep track to fewer files and even the performance of your web-project benefits too.

## Getting started

### Requirements
- None

### Installing via npm
```
npm install arrowhead
```

### Installing without npm
- Download the latest release of Arrowhead [here](https://github.com/Bikossor/Arrowhead/releases/latest). Paste Arrowhead into your script and you are done.

### Using Arrowhead with JSON
```html
<script>
  /* Copy Arrowhead in your JavaScript! */

  Arrowhead.parse({
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

### Using Arrowhead with strings
```html
<script>
  /* Copy Arrowhead in your JavaScript! */

  Arrowhead.parse("#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}");
</script>
```

## Versioning
I am using [Semantic Versioning 2.0.0](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Bikossor/Arrowhead/tags).

## Authors
- André Lichtenthäler ([Bikossor](https://bikossor.de)) - *Initial work*

## License
This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.

## Changelog
### Version 1.0.2 (19th February, 2018)
- [Added] Error messages

### Version 1.0.1 (17th February, 2018)
- [Improved] Security patch (Changed ``==`` to ``===`` and ``innerHTML`` to ``textContent``)

### Version 1.0.0 (8th February, 2018)
- [Added] Auto-appending to either `head` or `body` (Default: `head`)
- [Added] Support for css-string
- [Improved] Error checking

### Version 0.1.0 (27th November, 2017)
- First introduction of Arrowhead

### Proof of Concept (23rd November, 2017)