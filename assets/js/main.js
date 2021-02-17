jQuery(function($){

	"use strict"; 

	var win = $(window);
	var doc = $(document);

	/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/
		
	win.on('scroll', function() {
		if(win.width() > 1024) {
			if(doc.scrollTop() > (win.height() / 2)) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});	
	
	function toggleNavbar() {
		if(win.width() > 1024 && (doc.scrollTop() <= win.height())) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	win.on('resize', function() {
		toggleNavbar();	
	});

	/* Navbar Setting */
	function setNavbarLight() {
		$('.navbar').addClass('navbar-light');
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-light');
	}

	// Hide Collapsible Menu
	$('.navbar-nav li a').on('click', function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#main-nav').collapse('hide');
		}		
	});

	$('body').localScroll({
		duration: 2000,
		easing: 'easeInOutExpo',
		offset: -70
	});

	var magicCanvas = $.magicCanvas;

	if(win.width() > 1024) {
		magicCanvas.draw({
	        type: "random-move",
		    zIndex: -1,

	        rgb : function (circlePos) {
	            var px = circlePos.x;
	            var py = circlePos.y;

	            return { r: parseInt(173), g: parseInt(0), b: 255 };
	        }
	    })
	}

	var wow = new WOW();

	wow.init();
			
	$("#owl-testimonials").owlCarousel({

		slideSpeed : 1000,
		paginationSpeed : 2000,
		singleItem: true,
		items: 1,
		
		//Autoplay
		autoPlay : 5000,
		stopOnHover : false

	});
		 
	/*----------------------/
	/* MAIN TOP SUPERSIZED
	/*---------------------*/

	if($('.main-top').length > 0) {
		$.supersized({
				
			// Functionality		
			autoplay: 1,				// Slideshow starts playing automatically
			slide_interval: 3000,		// Length between transitions
			transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed: 1000,		// Speed of transition				
													   										   
			// Components							
			slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			thumb_links: 0,				// Individual thumb links for each slide
			slides:  	[				// Slideshow Images
							{image : 'assets/img/servers_room.jpg', title : '', thumb : '', url : ''},
							{image : 'assets/img/conections.jpg', title : '', thumb : '', url : ''},
							{image : 'assets/img/security.jpg', title : '', thumb : '', url : ''}, 
							{image : 'assets/img/yellow_wires.jpg', title : '', thumb : '', url : ''}, 
						],
		});

	}

	/*----------------------/
	/* ABOUT
	/*---------------------*/
	
	/* Toggle Text */

	// let toggleTextAbout = $('#box1 p')



	// $('.btnToggle').click(function (){
	// 	toggleTextAbout.toggleClass('.collapse')
	// }) 
	
	/*----------------------/
	/* PORTFOLIO
	/*---------------------*/

	/* Init Isotope */

	var $container = $('.isotope');

	win.load(function() {
        $container.isotope({
	      itemSelector: '.work-item'
 		});
    });

    // Filter functions
    var filterFns = {
      // Show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
      },
      // Show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };

    // Bind filter button click
    $('#filters').on('click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    // Change is-checked class on buttons
    $('.filter_group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });

    var $container = $('#container');
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 0
      },
      masonryHorizontal : {
        rowHeight: 0
      },
      cellsByRow : {
        columnWidth : 0,
        rowHeight : 0
      },
      cellsByColumn : {
        columnWidth : 0,
        rowHeight : 0
      },
      getSortData : {
        symbol : function($elem) {
          return $elem.attr('data-symbol');
        },
        category : function($elem) {
          return $elem.attr('data-category');
        },
      }
    });
    
	var $sortBy = $('#sort-by');
    $('#shuffle a').on('click', function() {
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
    });
	
	/* Init Isotope */

	var $container = $('.isotope');

	win.load(function() {

	    $container.isotope({
	      itemSelector: '.work-item'
	 	});

	});

    // Filter functions
    var filterFns = {
      // Show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
      },
      // Show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };

    // Bind filter button click
    $('#filters').on('click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    // Change is-checked class on buttons
    $('.filter_group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });

	var originalTitle, currentItem;

	$('.media-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {
				// modify item title to include description
				currentItem = $(this.items)[this.index];
				originalTitle = currentItem.title;
				currentItem.title = '<h3>' + originalTitle + '</h3><hr />' + '<p>' + $(currentItem).parents('.work-item').find('img').attr('alt') + '</p>';

				// adding animation				
				this.st.mainClass = 'mfp-fade'; 
			},
			close: function() {
				currentItem.title = originalTitle; 
			}
		}
		
	});

	/*----------------------/
	/* SCROLL TO TOP
	/*---------------------*/

	if(win.width() > 992) {
		win.on('scroll', function() {
			if($(this).scrollTop() > 500) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').on('click', function(e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 2000, 'easeInOutExpo');
		});	
	}

	if (!navigator.userAgent.match("Opera/")) {
		$('body').scrollspy({
			target: '#main-nav'
		});
	}else {
		$('#main-nav .nav li').removeClass('active');
	}

});
