Project-Tiles
=============

jQuery plugin that produces a grid, click active state, and CSS driven functions.

=============

<h3>What is Project Tiles?</h3>
<p>Project Tiles is a jquery plugin that was originally meant to be used as a way to present a portfolio (a la project tiles) but during the development began to take shape as an idea in which could be used for more than just that one application. Along came the idea that it could be used to replace the traditional slideshow or be used for callouts: there were more possibilities.
As a plugin: a majority of Project Tile’s magic is done through CSS, namely CSS3. Modernizr is included as well for backward compatibility so the script can pick and choose when to use CSS3 for animation and when to use jQuery’s animation function instead (there are two packages: one with modernizr, and one without modernizr).</p>

<h3>ProjectTiles works as so:</h3>
<p>The developer/designer sets how many tiles they want in a grid, defined in the initialization (rows & columns). The developer/designer then creates a table with TR elements that will correspond to the number of grid tiles they defined in the initialization which will be represented on the front-end. ProjectTiles then takes the number of rows and columns, does some math to determine how tall and wide each one should be in proportion to it’s container, the creates those tiles along with the the content from the table created earlier.
When a user hovers over a tile, the tile adds a hover class and will animate the caption accordingly (defined by the designer/developer). When the tile is clicked, the tile will expand to the full height and width of the container to reveal it’s content.</p>
