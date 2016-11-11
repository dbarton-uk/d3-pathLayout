# d3-pathLayout

d3.js plugin that maps the coordinates of an array of nodes, to points on a given SVG path string. 

The plug-in relies calculations made by the [SVG path interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement) so may yield 
different results dependant on browser.

Please see [here](https://gist.github.com/dbarton-uk/82b47b333031b591c41e9890ecbed473) for an example.

## Installing

If you use NPM, `npm install d3-pathLayout`. Otherwise, download the [latest release](https://github.com/dbarton-uk/d3-pathLayout/releases/latest).

## Example Usage

```js
var args = {
    nodes : nodes,
    path: path
}

var layout = d3.pathLayout(args);
```

## API Reference

<a href="#pathLayout" name="pathLayout">#</a> <b>pathLayout(<i>args</i>)</b>

Constructs a new pathLayout with the given arguments, and runs the algorithm

<a href="#nodes" name="nodes">#</a>pathLayout.<b>nodes(<i>n</i>)</b>

Sets the pathLayout nodes to the given <i>n</i> and runs the algorithm. Returns the existing nodes if <i>n</i> is not passed.

<a href="#path" name="path">#</a>pathLayout.<b>path(<i>p</i>)</b>

Sets the pathLayout path to the given <i>p</i> and runs the algorithm. Returns the existing path if <i>p</i> is not passed.