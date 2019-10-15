	const theme = document.getElementById( "body" );
	const toggleIcon = document.getElementById( "toggle" );

	function toggleTheme( ) {

		if ( theme.classList.contains( "dark" ) ) {
			theme.classList.add( "light" );
			theme.classList.remove( "dark" );
			toggleIcon.classList.add( 'fa-moon' );
			toggleIcon.classList.remove( 'fa-sun' );
			localStorage.setItem( 'theme', theme.className );

		}
		else {
			theme.classList.remove( "light" );
			theme.classList.add( "dark" );
			toggleIcon.classList.add( 'fa-sun' );
			toggleIcon.classList.remove( 'fa-moon' );

			localStorage.setItem( 'theme', theme.className );
		}
		console.log( theme.className );

	}

	function loadTheme( ) {
		if ( localStorage.getItem( "theme" ) === null ) {

			localStorage.setItem( 'theme', "dark" );
			toggleIcon.classList.remove( 'fa-moon' );
			toggleIcon.classList.add( 'fa-sun' );

		}
		else {
			let currentTheme = localStorage.theme;
			theme.className = currentTheme;
			if ( currentTheme === "light" ) {
				toggleIcon.classList.remove( 'fa-sun' );
				toggleIcon.classList.add( 'fa-moon' );
			}
			else {
				toggleIcon.classList.remove( 'fa-moon' );
				toggleIcon.classList.add( 'fa-sun' );
			}
		}

	}

	window.onload = loadTheme;

	function openNav( ) {
		document.getElementById( "myNav" ).style.width = "100%";
	}

	function closeNav( ) {
		document.getElementById( "myNav" ).style.width = "0%";
	}
	//<============ Vue.js <============
	const Main = {
		template: '#main'
	}
	const Page2 = {
		template: '#page2'
	}
	const routes = [ {
			path: '/',
			component: Main
    },
		{
			path: '/page2',
			component: Page2
    },
]
	const router = new VueRouter( {
		routes
	} );
	const app = new Vue( {
		router,
		el: '#app',
	} ).$mount( '#app' );
