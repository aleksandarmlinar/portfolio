'use strict'
// utbildning 
const eduObj = [
	{call: "Webbutvecklare", school: "Karlstad Universitet/2019-2022", desc: "Webbutvecklarprogrammet vid Karlstads Universitet."},
	{call: "Eltel", school: "Tekniska skolan '9.Maj', Backa Palanka, Serbien/1995-1999", desc: "4-årig gymnasieutbilnding med inriktning elektroteknik."}
]

// erfarenhet 
const expObj = [
	{title: "Webbutvecklare", placeAndYear: "Fristående projekt/2022-", desc: " Har gjort ett antal projekt som frilansande utvecklare."},
	{title: "Webbutvecklare", placeAndYear: "Bilparken i Karlstad/Karlstad/2022", desc: "Utveckling av interna system för bland annat registrering av inkommande/utgående bilar, däck, kontrakt, försäljningsstatistik etc. Påbyggnad och vidareutveckling av hemsidan med hjälp av publiceringsverktyget Wordpress."},
	{title: "Welcome Office Agent", placeAndYear: "Clarion Collection Hotel Plaza/Karlstad/2012-2022",  desc: "Welcome Office Agent. Nära kontakt med kunder, dagligt arbete med administration, bokningssystem samt bokninshantering."},
	{title: "Webbutvecklare", placeAndYear: "Vattenkvarn Produktion/Karlstad/2017-2020", desc: "Eget företag, webbutveckling. Uppbyggnad av webbsidor med hjälp av innehållshanteringssystemet Wordpress. Kravhantering, skiss, UI prototyping, design och programmering av teman med JS, HTML, CSS, PHP, jQuery, Bootstrap."},
	{title: "Webbkreatör", placeAndYear: "Luckylane Produktionsbyrå/Karlstad/2008-2009", desc: "Webbkreatör med fokus på design och utveckling av digitala presentationer för diverse produkter åt olika företag, mestadels inom livsmedel och handel. Jobbade agilt i ett team bestående av designers, programmerare och projektledare och hade frekventa möten med kunden."}

]


// skillbar 
const quaObjLines = [
	{name: 'HTML', percent: '90%', background: 'conic-gradient(#e34c26 324deg, #fff 324deg 360deg)'},
	{name: 'CSS', percent: "90%", background: 'conic-gradient(#2965f1 324deg, #fff 324deg 360deg)'},    
	{ name: 'JavaScript', percent: "80%", background: 'conic-gradient(#214ce5 288deg, #fff 288deg 360deg)'},
	{ name: 'jQuery', percent: "80%", background: 'conic-gradient(#0868ab 288deg, #fff 288deg 360deg)'},
	{ name: 'PHP', percent: "70%", background: 'conic-gradient(#4f5b93 270deg, #fff 270deg 360deg)'},
	{ name: 'MySQL', percent: "70%", background: 'conic-gradient(#00618a 270deg, #fff 270deg 360deg)' },
	{ name: 'Adobe', percent: "80%", background: 'conic-gradient(#ff0000 288deg, #fff 288deg 360deg)' }
]

// ovrigt

const otherObj = [
	{title: 'WordpressSS', info:"", desc:"Har använt och byggt upp flera webbsidor med hjälp av publiceringsverktyget WordPress. Jag byggde också skräddarsydda teman som var anpassade efter kundens behov."},
	{title: 'SQL', info:'', desc:'Jag är väl införstådd i SQL eftersom min utbildning innehöll kurser i bland annat databashantering, objektorienterad modellering etc.'},
	{title:'OFFICEPAKETET', info:'', desc:'Goda kunskaper i Word, Excell, PowerPoint'}, 
	{title: 'SPRÅKKUNSKAPER', info:'', desc: 'Talar och skriver flytande svenska, serbokroatiska (mitt modersmål) och har mycket goda kunskaper i engelska både i skrift och tal.'},
	{title: 'KÖRKORT', info:'', desc:'B'}
]

const portObj = [
	{title:'WEBB', info:'', desc:'Eftersom jag har studerat på Karlstads Universitet de senaste åren har jag tyvärr inte haft möjlighet till många arbetsinsatser under den tiden. Nedan listar jag de projekt som jag arbetade med då, några enkla sidor med få interaktioner (reservera bord etc.).'}

]



$(document).ready(()=>{ 
	
	if ($(window).width() <= 600) {
		$('.personal-info').prepend($('.inf').css('padding','0'));
	}
	let underlines = $(".field");

	// lägger till avskiljare.
	for (let i = 0; i<underlines.length; i++) {
		$(underlines.get(i)).append("<hr>");
	}


	// lägger till info i DOM
		eduObj.forEach(objInfo => {
			$(".edu ul").append("\n<li>" + objInfo.call + "</li>\n<li>" + objInfo.school + "</li>\n<li>" + objInfo.desc + "</li>");
		});
	

		expObj.forEach(objInfo => {
			$(".exp ul").append("\n<li>" + objInfo.title + "</li>\n<li>" + objInfo.placeAndYear + "</li>\n<li>" + objInfo.desc + "</li>");
		});

		otherObj.forEach(objInfo => {
			$(".other ul").append("\n<li>" + objInfo.title + "</li>\n<li>" + "</li>\n<li>" + objInfo.desc + "</li>");
		});

		portObj.forEach(objInfo => {
			$(".port ul").append("\n<li>" + objInfo.title + "</li>\n<li>" + "</li>\n<li>" + objInfo.desc + '<div class="portLinks"><a href="https://www.ditrevi.se" target="_blank">www.ditrevi.se</a></div><div class="portLinks"><a href="https://www.vedugnen.se" target="blank">www.vedugnen.se</a></div></li>');
		});

	//visar/gömmer beskrivningstexten under rubriken utbildning
	let eduExpandBtnRef = $(".edu ul li:nth-child(3n-2)");
	let eduDescRef = 	$(".edu ul li:nth-child(3n)");
	eduDescRef.hide();
			
	
	eduExpandBtnRef.each(function(item){
		var eduExpandFieldRef = $(this);
	
		eduExpandFieldRef.click(()=>{
			$(this).toggleClass('minus');
			eduDescRef.eq(item).css('opacity', '0');
			eduDescRef.eq(item).toggle(300, function(){
				eduDescRef.eq(item).css({opacity: 1, transition: 'opacity .6s ease'})
			});
			if(eduExpandFieldRef.attr('class') === 'minus'){
				$(this).css({
					'background': '#646464',
					'box-shadow': 'inset 0 0 2px #000'
				})
				
			} else {
				$(this).css({
					'background': '#9e9e9e', 
					'box-shadow': 'none'
				});
			}
		});	
	});

	
	//visar/gömmer beskrivningstexten under rubriken arbetslivserfarenhet
	let expExpandBtnRef = $(".exp ul li:nth-child(3n-2)");
	let expDescRef = $(".exp ul li:nth-child(3n)");
	expDescRef.hide();
	
	expExpandBtnRef.each(function(item){
		var expExpandBtnRef = $(this);
			
		
		expExpandBtnRef.click(()=>{
			$(this).toggleClass('minus');
			expDescRef.eq(item).css('opacity', '0');
			expDescRef.eq(item).toggle(300, function(){
				expDescRef.eq(item).css({opacity: 1, transition: 'opacity .6s ease'})
			});
			if(expExpandBtnRef.attr('class') === 'minus'){
				$(this).css({
					'background': '#646464',
					'box-shadow': 'inset 0 0 2px #000'
				})

			} else {
				$(this).css({
					'background': '#9e9e9e',
					'box-shadow': 'none'
				});
			}
		});	
	});

		//visar/gömmer beskrivningstexten under rubriken other
		let otherExpandBtnRef = $(".other ul li:nth-child(3n-2)");
		let otherDescRef = $(".other ul li:nth-child(3n)");
		otherDescRef.hide();
		
		otherExpandBtnRef.each(function(item){
			var otherExpandBtnRef = $(this);
				
			
			otherExpandBtnRef.click(()=>{
				$(this).toggleClass('minus');
				otherDescRef.eq(item).css('opacity', '0');
				otherDescRef.eq(item).toggle(300, function(){
					otherDescRef.eq(item).css({opacity: 1, transition: 'opacity .6s ease'})
				});
				if(otherExpandBtnRef.attr('class') === 'minus'){
					$(this).css({
						'background': '#646464',
						'box-shadow': 'inset 0 0 2px #000'
					})
	
				} else {
					$(this).css({
						'background': '#9e9e9e',
						'box-shadow': 'none'
					});
				}
			});	
		});
	
				//visar/gömmer beskrivningstexten under rubriken portfolio
				let portExpandBtnRef = $(".port ul li:nth-child(3n-2)");
				let portDescRef = $(".port ul li:nth-child(3n)");
				portDescRef.hide();
				
				portExpandBtnRef.each(function(item){
					var portExpandBtnRef = $(this);
						
					
					portExpandBtnRef.click(()=>{
						$(this).toggleClass('minus');
						portDescRef.eq(item).css('opacity', '0');
						portDescRef.eq(item).toggle(300, function(){
							portDescRef.eq(item).css({opacity: 1, transition: 'opacity .6s ease'})
						});
						if(portExpandBtnRef.attr('class') === 'minus'){
							$(this).css({
								'background': '#646464',
								'box-shadow': 'inset 0 0 2px #000'
							})
			
						} else {
							$(this).css({
								'background': '#9e9e9e',
								'box-shadow': 'none'
							});
						}
					});	
				});

	
	
	
	
	// lägger till dom färgade fält som representerar färdigheter. Läggs till automatiskt när man lägger till en färdighet. // detta är bara ett alternativ till cirklarna :)
	
	//$(".qua div").after("<div></div>");
	//let quaExpandBtnRef = $(".qua ul li:nth-child(3n-2)");
	//let quaBackgRef = $(".qua div:nth-child(2n)");
	
	
	// animerade bars - reserv ifall jag ändrar mig :)
	/*quaBackgRef.css({
		'position': 'relative', 
		'bottom': '3.2rem',
		'background-color' : 'rgb(230, 230, 230)',
		'width': '90%',
		'height' : '3rem',
		'display' : 'inline-block',
		'cursor' : 'pointer'
	});

	quaLineRef.css({
		'position': 'relative', 
		'opacity': "0",
        'display': "inline-block",
		'z-index' : '99999'
	})
	
        quaLineRef.each(function(i){
		var rectRef = $(this);
		var classRef = "skill " + "number-" + i++;
	    rectRef.addClass(classRef);
	});

	// var count = 0;
	// animear genom att expandera varje "skill"
	quaBackgRef.each(function(item){
		var quaExpandFieldRef = $(this);
		quaExpandFieldRef.click(()=>{
			quaLineRef.eq(item).animate({
				width: quaObjLines[item].width,
				opacity: "1"	
			}, 400).css('background', quaObjLines[item].background);
		});	
	});
*/

	// skills som en cirkel/pie chart	
	let quaPieRef = $(".pie-charts div:nth-child(1n)");
	
	quaPieRef.each(function(i){
		var rectRef = $(this);
		var classRef = "skill " + "number-" + i++;
	    rectRef.addClass(classRef);
	});

	// skapar lite element...
	$('.pie-charts div').prepend('<div class="container"></div>');
	$('.pie-charts .container').after('<span></span>');
	let quaPiePercentRef = $('.pie-charts span');
	//console.log($(".qua").html())

	// för varje ref till en "pie" lägg till bkg, namn och procent från obj högst upp
	quaPieRef.each(function(item){
		quaPieRef.eq(item).css('background', quaObjLines[item].background);
		quaPiePercentRef.eq(item).html(quaObjLines[item].name + '<br>' + quaObjLines[item].percent);
	});

	$(window).on('resize', () => {

		if ($(window).width() <= 600) {
			$('.personal-info').prepend($('.inf').css('padding','0'));
		}

		if ($(window).width() >= 600) {
			$('.inf').insertBefore($('.edu'));
			$('.inf').css('padding', '0 0 0 1rem');
		}

	})
});