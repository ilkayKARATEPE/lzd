$j(window).load(function(){
	setTimeout(function(){
		$j("#panel").animate({marginLeft: "0px"});
		$j("a.open").addClass('opened');
	},1000);
});


$j(document).ready(function() {


	$j("#panel a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel").css("margin-left");
		if (margin_left == "-238px"){
			$j("#panel").animate({marginLeft: "0px"});
			$j(this).addClass('opened');
		}
		else{
			$j("#panel").animate({marginLeft: "-238px"});
			$j(this).removeClass('opened');
			$j('.backgroundColorSelector, .firstColorSelector, .secondColorSelector, .thirdColorSelector').css('display','none');
			if(showBackground ) showBackground = !showBackground;
			if(showFirst) showFirst = !showFirst;
			if(showSecond) showSecond = !showSecond;
			if(showThird) showThird = !showThird;
		}
		return false;
	});
	
	$j('#panel select').sSelect();
	$j('#tootlbar_ajax').change(function(){
		if($j(this).val() != ""){
			$j.ajax({
				url: root+'?animation='+$j(this).val(),
				success: function(){
					document.location = root;
				}
			});
			
		}
	});
	$j('#tootlbar_menu').change(function(){
		if($j(this).val() != ""){
			$j.ajax({
				url: root+'?menu='+$j(this).val(),
				success: function(){
					document.location = root;
				}
			});
		}
	});
	
	$j('#tootlbar_pattern').change(function(){
		if($j(this).val() != ""){
			
			newSkin ="body { \
									background-image: url('wp-content/themes/minimum/img/"+$j(this).val()+".png'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
								} \
								.container, \
								.move_down .second { \
									background-color: transparent; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('#tootlbar_footer').change(function(){
		if($j(this).val() != ""){
			$j.ajax({
				url: root+'?footer='+$j(this).val(),
				success: function(){
					document.location = root;
				}
			});
		}
	});
	
	$j('.backgroundColorSelector').each(function(){
		var Othis = $j(this).siblings('.colorSelector'); //cache a copy of the this variable for use inside nested function
		var initialColor = $j(Othis).next('input').attr('value');
		$j(this).ColorPicker({
			flat: true,
			color: initialColor,
			onShow: function (colpkr) {
				$j(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$j(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$j(Othis).children('div').css('backgroundColor', '#' + hex);
				$j(Othis).next('input').attr('value','#' + hex);
				if ($j("#toolbar_background_colors").length > 0){
					$j("#toolbar_background_colors").remove();
				}
				
				newSkin ="body,.container, .move_down .second,.progress_bars .progress_title, .progress_bars2 .progress_title {background-color: #"+hex+";}";
				jQuery('body').append('<style id="toolbar_background_colors" type="text/css">'+newSkin+'</style>'); 
				
				if($j('#tootlbar_pattern').getSetSSValue() != ""){
					console.log($j('#tootlbar_pattern').getSetSSValue());
					newSkin2 =".container, .move_down .second,.progress_bars .progress_title, .progress_bars2 .progress_title {background-color: transparent;}";
					jQuery('body').append('<style id="toolbar_background_colors" type="text/css">'+newSkin2+'</style>'); 
				}
				
				
			}
		});
	});
	var showBackground = false;
	$j('.background_colorSelector, .backgroundColorSelector .colorpicker_submit').bind('click', function() {
		$j('.backgroundColorSelector').css({display: showBackground ? 'none' : 'block'});
		$j('.backgroundColorSelector > div').css({display: showBackground ? 'none' : 'block'});
		showBackground = !showBackground;
	});
	
	$j('.firstColorSelector').each(function(){
		var Othis = $j(this).siblings('.colorSelector'); //cache a copy of the this variable for use inside nested function
		var initialColor = $j(Othis).next('input').attr('value');
		$j(this).ColorPicker({
			flat: true,
			color: initialColor,
			onShow: function (colpkr) {
				$j(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$j(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$j(Othis).children('div').css('backgroundColor', '#' + hex);
				$j(Othis).next('input').attr('value','#' + hex);
				if ($j("#toolbar_first_colors").length > 0){
					$j("#toolbar_first_colors").remove();
				}
				newSkin =".button, input[type='submit'], \
									.posts_holder2 article .text .date, \
									.dropcap2_black, .dropcap2_gray, \
									.dropcap3_black, .dropcap3_gray, \
									.ordered.black ul > li:before, \
									table.standard-table th, \
									.tabs .tabs-nav li a, \
									.price_table:hover h4, \
									.price_table:hover .signup a, \
									.price_table.active h4, \
									.price_table.active .signup a, \
									.progres_bars3 .bar.active .bar_active, \
									.bx-prev, \
									.bx-next, \
									.flex-direction-nav .flex-next, \
									.flex-direction-nav .flex-prev, \
									.progress_bars .progress_content, \
									.progress_bars2 .progress_content .bar.active .bar_active, \
									.slide .text.type2, \
									.accordion h5 span:hover, \
									.accordion h5.ui-state-active span, \
									.dropcap.square, \
									.dropcap.circle, \
									.ordered ul > li:before, \
									.ordered ol > li:before, \
									table.standard-table th, \
									.progress_bars .progress_content, \
									.progress_bars2 .progress_content .bar.active .bar_active, \
									.progres_bars3 .bar.active .bar_active, \
									.circle_item .circle, \
									.widget_tag_cloud a, \
									#magic2, \
									.single nav.main_menu ul li:hover a, \
									.woocommerce-page nav.main_menu ul li:hover a, \
									.drop_down .second ul, \
									.drop_down .second ul li ul, \
									input:focus, \
									textarea:focus,\
									.pagination2 ul li a, \
									.separator.small, \
									.slide .text hr, \
									.portfolio_holder article hr, \
									.slide .text a.button:hover, \
									.tp-caption a.button:hover, \
									.back_to_top, \
									.tp-rightarrow.default, \
									.tp-leftarrow.default, \
									.stylish-select .content .newListSelected, \
									.woocommerce a.button, \
									.woocommerce button.button, \
									.woocommerce input.button, \
									.woocommerce #respond input#submit, \
									.woocommerce #content input.button, \
									.woocommerce-page a.button, \
									.woocommerce-page button.button, \
									.woocommerce-page input.button, \
									.woocommerce-page #respond input#submit, \
									.woocommerce-page #content input.button, \
									.woocommerce a.button.alt, \
									.woocommerce button.button.alt, \
									.woocommerce input.button.alt, \
									.woocommerce #respond input#submit.alt, \
									.woocommerce #content input.button.alt, \
									.woocommerce-page a.button.alt, \
									.woocommerce-page button.button.alt, \
									.woocommerce-page input.button.alt, \
									.woocommerce-page #respond input#submit.alt, \
									.woocommerce-page #content input.button.alt, \
									.woocommerce nav.woocommerce-pagination ul li a, \
									.woocommerce nav.woocommerce-pagination ul li span, \
									.woocommerce #content nav.woocommerce-pagination ul li a, \
									.woocommerce #content nav.woocommerce-pagination ul li span, \
									.woocommerce-page nav.woocommerce-pagination ul li a, \
									.woocommerce-page nav.woocommerce-pagination ul li span, \
									.woocommerce-page #content nav.woocommerce-pagination ul li a, \
									.woocommerce-page #content nav.woocommerce-pagination ul li span, \
									.woocommerce .quantity .plus:hover, \
									.woocommerce .quantity .minus:hover, \
									.woocommerce #content .quantity .plus:hover, \
									.woocommerce #content .quantity .minus:hover, \
									.woocommerce-page .quantity .plus:hover, \
									.woocommerce-page .quantity .minus:hover, \
									.woocommerce-page #content .quantity .plus:hover, \
									.woocommerce-page #content .quantity .minus:hover, \
									.woocommerce div.product .woocommerce-tabs ul.tabs li a, \
									.woocommerce #content div.product .woocommerce-tabs ul.tabs li a, \
									.woocommerce-page div.product .woocommerce-tabs ul.tabs li a, \
									.woocommerce-page #content div.product .woocommerce-tabs ul.tabs li a, \
									.woocommerce table.shop_table thead, \
									.woocommerce-page table.shop_table thead, \
									.woocommerce table.cart td.actions .coupon .input-text:focus, \
									.woocommerce #content table.cart td.actions .coupon .input-text:focus, \
									.woocommerce-page table.cart td.actions .coupon .input-text:focus, \
									.woocommerce-page #content table.cart td.actions .coupon .input-text:focus, \
									.woocommerce span.onsale, \
									.woocommerce-page span.onsale, \
									.woocommerce #billing_country_chzn, \
									.woocommerce #shipping_country_chzn, \
									.woocommerce-checkout .form-row .chzn-container-single .chzn-search input, \
									.selectnav span \
									{\
										background-color: #"+hex+"; \
									} \
									\
									.dropcap1_black, .dropcap1_gray, \
									.tabs .tabs-nav li.active a, \
									.dropcap.transparent, \
									.woocommerce div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce #content div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce-page div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active a \
									{ \
										color: #"+hex+"; \
									}\
									table.standard-table.border tr:first-child \
									{ \
										border: 1px solid #"+hex+"; \
									}\
									";
				jQuery('body').append('<style id="toolbar_first_colors" type="text/css">'+newSkin+'</style>'); 
			}
		});
	});
	var showFirst = false;
	$j('.first_ColorSelector, .firstColorSelector .colorpicker_submit').bind('click', function() {
		$j('.firstColorSelector').css({display: showFirst ? 'none' : 'block'});
		$j('.firstColorSelector > div').css({display: showFirst ? 'none' : 'block'});
		showFirst = !showFirst;
	}); 
	
	$j('.secondColorSelector').each(function(){
		var Othis = $j(this).siblings('.colorSelector'); //cache a copy of the this variable for use inside nested function
		var initialColor = $j(Othis).next('input').attr('value');
		$j(this).ColorPicker({
			flat: true,
			color: initialColor,
			onShow: function (colpkr) {
				$j(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$j(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$j(Othis).children('div').css('backgroundColor', '#' + hex);
				$j(Othis).next('input').attr('value','#' + hex);
				if ($j("#toolbar_second_colors").length > 0){
					$j("#toolbar_second_colors").remove();
				}
				newSkin =".button:hover, input[type='submit']:hover, \
									.dropcap2_gray, \
									.dropcap3_gray, \
									.bx-prev:hover, \
									.bx-next:hover, \
									.flex-direction-nav .flex-next:hover, \
									.flex-direction-nav .flex-prev:hover, \
									.progres_bars3 .progress_bar:hover .bar.active .bar_active, \
									.circle_item:hover .circle, \
									.pagination2 ul li a:hover, \
									.pagination2 ul li.active span, \
									.widget_tag_cloud a:hover, \
									.pagination2 ul li a:hover, \
									.pagination2 ul li.active span, \
									#magic, \
									.slide .text a.button,	\
									.tp-caption a.button, \
									.back_to_top:hover, \
									.tp-rightarrow.default:hover, \
									.tp-leftarrow.default:hover, \
									.woocommerce a.button:hover, \
									.woocommerce button.button:hover, \
									.woocommerce input.button:hover, \
									.woocommerce #respond input#submit:hover, \
									.woocommerce #content input.button:hover, \
									.woocommerce-page a.button:hover, \
									.woocommerce-page button.button:hover, \
									.woocommerce-page input.button:hover, \
									.woocommerce-page #respond input#submit:hover, \
									.woocommerce-page #content input.button:hover \
									.woocommerce a.button.alt:hover, \
									.woocommerce button.button.alt:hover, \
									.woocommerce input.button.alt:hover, \
									.woocommerce #respond input#submit.alt:hover, \
									.woocommerce #content input.button.alt:hover, \
									.woocommerce-page a.button.alt:hover, \
									.woocommerce-page button.button.alt:hover, \
									.woocommerce-page input.button.alt:hover, \
									.woocommerce-page #respond input#submit.alt:hover, \
									.woocommerce-page #content input.button.alt:hover,	\
									.woocommerce nav.woocommerce-pagination ul li span.current, \
									.woocommerce nav.woocommerce-pagination ul li a:hover, \
									.woocommerce nav.woocommerce-pagination ul li a:focus, \
									.woocommerce #content nav.woocommerce-pagination ul li span.current, \
									.woocommerce #content nav.woocommerce-pagination ul li a:hover, \
									.woocommerce #content nav.woocommerce-pagination ul li a:focus, \
									.woocommerce-page nav.woocommerce-pagination ul li span.current, \
									.woocommerce-page nav.woocommerce-pagination ul li a:hover, \
									.woocommerce-page nav.woocommerce-pagination ul li a:focus, \
									.woocommerce-page #content nav.woocommerce-pagination ul li span.current, \
									.woocommerce-page #content nav.woocommerce-pagination ul li a:hover, \
									.woocommerce-page #content nav.woocommerce-pagination ul li a:focus, \
									.woocommerce .widget_price_filter .ui-slider .ui-slider-range, \
									.woocommerce-page .widget_price_filter .ui-slider .ui-slider-range, \
									.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, \
									.woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle \
									{  \
									background-color: #"+hex+"; \
									} \
									.dropcap1_gray, \
									.drop_down .second ul li:hover a, \
									.drop_down .second ul li.sub ul li a:hover, \
									.tabs .tabs-nav li a:hover, \
									.recentcomments, \
									.move_down .mc a:hover, \
									.move_down ul li .second .mc a.sub:hover, \
									.slide .text.type2 a:hover, \
									.woocommerce div.product p.stock, \
									.woocommerce #content div.product p.stock, \
									.woocommerce-page div.product p.stock, \
									.woocommerce-page #content div.product p.stock, \
									.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover, \
									.woocommerce #content div.product .woocommerce-tabs ul.tabs li a:hover, \
									.woocommerce-page div.product .woocommerce-tabs ul.tabs li a:hover, \
									.woocommerce-page #content div.product .woocommerce-tabs ul.tabs li a:hover \
									{ \
										color: #"+hex+"; \
									} \
									blockquote \
									{ \
									border-left: 1px solid #"+hex+"; \
									} \
									";
				jQuery('body').append('<style id="toolbar_second_colors" type="text/css">'+newSkin+'</style>'); 
			}
		});
	});
	var showSecond = false;
	$j('.second_colorSelector, .secondColorSelector .colorpicker_submit').bind('click', function() {
		$j('.secondColorSelector').css({display: showSecond ? 'none' : 'block'});
		$j('.secondColorSelector > div').css({display: showSecond ? 'none' : 'block'});
		showSecond = !showSecond;
	}); 

	$j('.thirdColorSelector').each(function(){
		var Othis = $j(this).siblings('.colorSelector'); //cache a copy of the this variable for use inside nested function
		var initialColor = $j(Othis).next('input').attr('value');
		$j(this).ColorPicker({
			flat: true,
			color: initialColor,
			onShow: function (colpkr) {
				$j(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$j(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$j(Othis).children('div').css('backgroundColor', '#' + hex);
				$j(Othis).next('input').attr('value','#' + hex);
				if ($j("#toolbar_third_colors").length > 0){
					$j("#toolbar_third_colors").remove();
				}
				newSkin ="table.standard-table tr:nth-child(2n+1) td, \
									.tabs .tabs-nav li.active a, \
									.tabs .tabs-container, \
									.price_table h4, \
									.price_table li.cell:nth-child(2n+1), \
									.price_table .signup a, \
									.progress_bars .progress_content_outer, \
									.progress_bars2 .progress_content .bar .bar_noactive, \
									.progres_bars3 .bar .bar_noactive, \
									.testimonial, \
									.accordion h5 span, \
									.stylish-select .content ul.newList, \
									.selectnav ul, \
									.woocommerce .chzn-container .chzn-results, \
									.woocommerce .chzn-container-single .chzn-search, \
									.woocommerce .quantity .plus, \
									.woocommerce .quantity .minus, \
									.woocommerce #content .quantity .plus, \
									.woocommerce #content .quantity .minus, \
									.woocommerce-page .quantity .plus, \
									.woocommerce-page .quantity .minus, \
									.woocommerce-page #content .quantity .plus, \
									.woocommerce-page #content .quantity .minus, \
									.woocommerce div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce #content div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce-page div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active a, \
									.woocommerce div.product .woocommerce-tabs .panel, \
									.woocommerce #content div.product .woocommerce-tabs .panel, \
									.woocommerce-page div.product .woocommerce-tabs .panel, \
									.woocommerce-page #content div.product .woocommerce-tabs .panel, \
									.woocommerce table.shop_table tbody tr:nth-child(2n) td, \
									.woocommerce .cart-collaterals .cart_totals tr:nth-child(2n) td, \
									.woocommerce .cart-collaterals .cart_totals tr:nth-child(2n) th, \
									.woocommerce-page .cart-collaterals .cart_totals tr:nth-child(2n) td, \
									.woocommerce-page .cart-collaterals .cart_totals tr:nth-child(2n) th, \
									.woocommerce table.shop_table tfoot tr:nth-child(2n) th, \
									.woocommerce-page table.shop_table tfoot tr:nth-child(2n) th, \
									.woocommerce table.shop_table tfoot tr:nth-child(2n) td, \
									.woocommerce-page table.shop_table tfoot tr:nth-child(2n) td, \
									.woocommerce #payment, \
									.woocommerce-page #payment \
									{ \
									background-color: #"+hex+"; \
									}";
				jQuery('body').append('<style id="toolbar_third_colors" type="text/css">'+newSkin+'</style>'); 
			}
		});
	});
	var showThird = false;
	$j('.third_colorSelector, .thirdColorSelector .colorpicker_submit').bind('click', function() {
		$j('.thirdColorSelector').css({display: showThird ? 'none' : 'block'});
		$j('.thirdColorSelector > div').css({display: showThird ? 'none' : 'block'});
		showThird = !showThird;
	}); 


}); 