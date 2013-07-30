/*
	Project Tiles
	Born and bred by Pat Eason
	Version: 1.0 - 5.1.13
--------------------------------------------		
	Changelog:
	> 5.1.13 - Initial Release
--------------------------------------------	
*/

(function($) {
	$.fn.projectTiles = function(options) {
		// Create some defaults, extending them with any options that were provided
		var defaults = {
			'rows': '2',
			'columns': '3',
			'margin': '10',
			'capAnimation':'true',
			'capDirect': 'left',
			'capSpeed' : 300,
			'capPosition' : 'bottom',
			'activeSpeed' : 300,
			'activeClass': 'active'
		};
		var settings = $.extend({}, defaults, options);
		return this.each(function() {
			rows = settings.rows;
			columns = settings.columns;
			tiles = rows * columns;
			margin = settings.margin;
			capAnimation = settings.capAnimation;
			capDirect = settings.capDirect;
			capSpeed = settings.capSpeed;
			capPosition = settings.capPosition;
			activeSpeed = settings.activeSpeed;
			activeClass = settings.activeClass;
			container = $(this);
			counter = 0;
			
			//Get container height+width
			contHeight = $(this).height();
			contWidth = $(this).width();
			
			//Calculate tile height+width
			tileHeight = (contHeight - (margin * rows)) / rows;
			tileWidth = (contWidth - (margin * columns)) / columns;
			console.log(tileHeight+ '-' +tileWidth+'-'+capSpeed+'-'+activeSpeed);
			
			//Create tiles with disregard for management table
			/*for (var i = 0; i < tiles; i++) {
				$('<div class="projectTile" style="height:' + tileHeight + 'px;width:' + tileWidth + 'px;margin:' + (margin / 2) + 'px;"><div class="closeButton"></div></div>').appendTo(container);
				var position = $('.projectTile:eq(' + i + ')').position();
				$('.projectTile:eq(' + i + ')').attr('data-posX', position.left).attr('data-posY', position.top).css('left', position.left).css('top', position.top);
			}*/
			
			//Create tiles from management table
			$('#tileTable tr').each(function(i){
				if(i >= tiles){
					return false;
				}
				var tileIMG = $(this).children('td:eq(0)').children('img:first').attr('src');
				var tileCaption = $(this).children('td:eq(1)').html();
				var tileContent = $(this).children('td:eq(2)').html();
				$('<div id="tile_'+i+'" class="projectTile" style="transition:all '+activeSpeed+'ms;-webkit-transition:all '+activeSpeed+'ms;background-image:url('+tileIMG+');height:' + tileHeight + 'px;width:' + tileWidth + 'px;margin:' + (margin / 2) + 'px;"><div class="closeButton"></div><div class="tileCaption" style="transition:all '+capSpeed+'ms;-webkit-transition:all '+capSpeed+'ms;"><div class="gutter">'+tileCaption+'</div></div><div class="tileContent"><div class="gutter">'+tileContent+'</div></div></div>').appendTo(container);
				var position = $('.projectTile').eq(i).position();
				$('.projectTile').eq(i).attr('data-posX', position.left).attr('data-posY', position.top).css('left', position.left).css('top', position.top);
				//var position = $('.projectTile:eq(' + i + ')').position();
				//$('.projectTile:eq(' + i + ')').attr('data-posX', position.left).attr('data-posY', position.top).css('left', position.left).css('top', position.top);
			});
			
			//Check if caption animation is enabled
			if(capAnimation == 'true'){
			
				//Set caption location based on direction variable
				if(capDirect == 'left'){
						$('.tileCaption').css('left', '-100%');
					}else if(capDirect == 'right'){
						$('.tileCaption').css('right', '-100%');
					}else if(capDirect == 'top'){
						$('.tileCaption').css('top', '-100%');
					}else if(capDirect == 'bottom'){
						$('.tileCaption').css('bottom', '-100%');
					}else if(capDirect != 'left' || capDirect != 'right' || capDirect != 'top' || capDirect != 'bottom'){
						capDirect = 'left';
						$('.tileCaption').css('left', '-100%');
					}
				if(capDirect != 'top' && capDirect != 'bottom'){
					if(capPosition == 'top'){
							$('.tileCaption').css('top', '0');
						}else if(capPosition == 'bottom'){
							$('.tileCaption').css('bottom', '0');
						}else if(capPosition != 'top' || capPosition != 'bottom'){
							$('.tileCaption').css('bottom','0');
						}
				}
				
				//Hover functions for tiles
				$(".projectTile").hover(
				function () {
					if($(this).hasClass(activeClass) == false){
						tileIndex = $(this).index('.projectTile');
						$(this).addClass("hover");
						if(capDirect == 'left'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								left: '0%'
							}, capSpeed);
						}else if(capDirect == 'right'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								right: '0%'
							}, capSpeed);
						}else if(capDirect == 'top'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								top: '0%'
							}, capSpeed);
						}else if(capDirect == 'bottom'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								bottom: '0%'
							}, capSpeed);
						}else if(capDirect != 'left' || capDirect != 'right' || capDirect != 'top' || capDirect != 'bottom'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								left: '0%'
							}, capSpeed);
						}
					}
					
				},
				function () {
					$(this).removeClass("hover");
					if(capDirect == 'left'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								left: '-100%'
							}, capSpeed);
						}else if(capDirect == 'right'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								right: '-100%'
							}, capSpeed);
						}else if(capDirect == 'top'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								top: '-100%'
							}, capSpeed);
						}else if(capDirect == 'bottom'){
							$('.tileCaption:eq('+tileIndex+')').stop().animate({
								bottom: '-100%'
							}, capSpeed);
						}else if(capDirect != 'left' || capDirect != 'right' || capDirect != 'top' || capDirect != 'bottom'){
						$('.tileCaption:eq('+tileIndex+')').stop().animate({
							left: '-100%'
						}, capSpeed);
					}
				}
				);
				
			}else{
				$('.projectTile').hover(function(){
					if($(this).hasClass(activeClass) == false){
						tileIndex = $(this).index('.projectTile');
						$(this).addClass('hover');
					}
				},function(){
					$(this).removeClass('hover')
				});
			}
			
			//Set project tiles as absolute
			$('.projectTile').each(function() {
				var posX = $(this).attr('data-posX');
				var posY = $(this).attr('data-posY');
				$(this).css('position', 'absolute');
			});
			
			//Click function for close button
			$('.closeButton').click(function() {
				thisTile = $(this).parent();
				posX = $(thisTile).attr('data-posx');
				posY = $(thisTile).attr('data-posy');
				if (Modernizr.csstransitions == false) {
					$(thisTile).animate({
						top: posY + 'px',
						left: posX + 'px',
						width: tileWidth + 'px',
						height: tileHeight + 'px',
						margin: (margin / 2)
					}, activeSpeed, function() {
						// Animation complete.
						thisTile.removeClass(activeClass);
					});
				} else if (Modernizr.csstransitions == true) {
					thisTile.css('top', posY + 'px').css('left', posX + 'px').css('width', tileWidth + 'px').css('height', tileHeight + 'px').css('margin', (margin / 2) + 'px');
					
					setTimeout(function(){thisTile.removeClass(activeClass);},100);
				}
				
			});
			//Click function for tiles
			$('.projectTile').not('.'+activeClass).click(function() {
				$(this).removeClass('hover');
				if (!$(this).hasClass(activeClass)) {
					
					if (Modernizr.csstransitions == false) {
						$(this).addClass(activeClass).animate({
							top: '0px',
							left: '0px',
							width: contWidth + 'px',
							height: contHeight + 'px',
							margin: 0
						}, activeSpeed, function() {
							// Animation complete.
						});
					}else if (Modernizr.csstransitions == true) {
						$(this).addClass(activeClass).css('width', contWidth).css('height', contHeight).css('top', 0).css('left', 0).css('margin', 0);
					}
				}
				
				setTimeout(function(){
				//Auto-size iframes w/class
				$('iframe.resize').each(function() {
					$container = $(this).parent().parent();
					$(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
					var newWidth = $container.width();
					var newHeight = $container.height();
					var $el = $(this);
					$el.width(newWidth).height(newHeight);
				});
				},activeSpeed);
				
				
			});
		});
	};
})(jQuery);