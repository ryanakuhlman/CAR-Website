		let navAll = document.getElementById('nav-all');
		const navMovies = document.getElementById('nav-movies');
		const navTVShows = document.getElementById('nav-tv-shows');
		let movieContent = document.getElementsByClassName('movie-content');
		let movieBlock = document.getElementsByClassName('block-content');
		let pageTab = 'all';
		let shownMovieContent, hiddenMovieContent;

		let prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
		  let currentScrollPos = window.pageYOffset;
		  if (prevScrollpos > currentScrollPos) {
		    document.getElementById("nav-bar").style.top = "40px";
		    document.getElementById("back-nav-bar").style.top = "40px";
		  } else {
		    document.getElementById("nav-bar").style.top = "-80px";
		    document.getElementById("back-nav-bar").style.top = "-80px";
		  }
		  prevScrollpos = currentScrollPos;
		}

		function nightMode() {
			if (document.getElementById('night-mode-button').innerHTML == 'Night Mode: ON') {
				document.body.style.backgroundColor="white";
				document.getElementById('nav-bar').style.backgroundColor="white";
				document.getElementById('nav-movies').style.color="black";
				document.getElementById('nav-tv-shows').style.color="black";
				document.getElementById('nav-all').style.color="black";
				document.getElementById('nav-settings-dropdown-button').style.color="black";
				document.getElementById('nav-settings-dropdown-button').style.	backgroundColor="white";
				document.getElementById('nav-search').style.color="black";
				document.getElementById('night-mode-button').innerHTML="Night Mode: OFF";
			} else {
				document.body.style.backgroundColor="#1e2126";
				document.getElementById('nav-bar').style.backgroundColor="#292c33";
				document.getElementById('nav-movies').style.color="white";
				document.getElementById('nav-tv-shows').style.color="white";
				document.getElementById('nav-all').style.color="white";
				document.getElementById('nav-settings-dropdown-button').style.color="white";
				document.getElementById('nav-settings-dropdown-button').style.	backgroundColor="#292c33";
				document.getElementById('nav-search').style.color="white";
				document.getElementById('night-mode-button').innerHTML="Night Mode: ON";
			}
		}

		function movieFilter(shownClass,hiddenClass) {
			document.getElementById('search-page').style.display="none";
			if (shownClass == 'movie') {
				pageTab = 'movie'
				closeEpisodesList();
				document.getElementById("nav-search").focus();
				document.getElementById('nav-movies').classList.add('active');
				document.getElementById('nav-all').classList.remove('active');
				document.getElementById('nav-tv-shows').classList.remove('active');
			} else {
				pageTab = 'tv-show'
				closeEpisodesList();
				document.getElementById("nav-search").focus();
				document.getElementById('nav-movies').classList.remove('active');
				document.getElementById('nav-all').classList.remove('active');
				document.getElementById('nav-tv-shows').classList.add('active');
			};
			let hideClass = document.getElementsByClassName(hiddenClass);
			let hideClassIndex = 0, hideClassLength = hideClass.length;

			for (; hideClassIndex < hideClassLength; hideClassIndex++) {
				hideClass[hideClassIndex].style.display = 'none';
				for (a = 0; a < movieContent.length; a++) {
						movieContent[a].style.display = 'none';
				}
			}
			

			let showClass = document.getElementsByClassName(shownClass);
			let showClassIndex = 0, showClassLength = showClass.length;
			for (; showClassIndex < showClassLength; showClassIndex++) {
				showClass[showClassIndex].style.display = 'block';
			}

		}

		function showAllFilter(shownClass,hiddenClass) {
			pageTab = 'all';
			closeEpisodesList()
			document.getElementById('search-page').style.display="none";
			let hideClass = document.getElementsByClassName(hiddenClass);
			let hideClassIndex = 0, hideClassLength = hideClass.length;
			for (; hideClassIndex < hideClassLength; hideClassIndex++) {
				hideClass[hideClassIndex].style.display = 'block';
				document.getElementById("nav-search").focus();
			}
			let a;
			for (a = 0; a < movieContent.length; a++) {
					movieContent[a].style.display = 'none';
				}

			let showClass = document.getElementsByClassName(shownClass);
			let showClassIndex = 0, showClassLength = showClass.length;
			for (; showClassIndex < showClassLength; showClassIndex++) {
				showClass[showClassIndex].style.display = 'block';

			}
			document.getElementById('nav-movies').classList.remove('active');
			document.getElementById('nav-all').classList.add('active');
			document.getElementById('nav-tv-shows').classList.remove('active');
			document.getElementById('nav-search').classList.remove('active');
		}

		function searchContent() {
			closeEpisodesList()
			pageTab = 'search';
			let movie = document.getElementsByClassName('movie');
			let tv = document.getElementsByClassName('tv_show');
			let t, m, c, e;
			for (t = 0; t < movie.length; t++) {
				movie[t].style.display = 'none';
				}
			for (m = 0; m < tv.length; m++) {
				tv[m].style.display = 'none';
				}
			for (c = 0; c < movieContent.length; c++) {
				movieContent[c].style.display = 'none';
			}
			document.getElementById('search-page').style.display="block";
			document.getElementById('nav-movies').classList.remove('active');
			document.getElementById('nav-all').classList.remove('active');
			document.getElementById('nav-tv-shows').classList.remove('active');
		}
		
		function showContent(block,content) {
			closeEpisodesList();
			let a,b;
			let allTv, allMovie;
			let t, m, stv, sm;
			let movie = document.getElementsByClassName('movie');
			let tv = document.getElementsByClassName('tv_show');
			hideOtherContent();
			if (block.style.display='block') {
	  		  	block.style.display='none'
	  		  	content.style.display='flex'
	  		} else {
	  		  	block.style.display='none'
		  	}
			if (pageTab == 'tv-show') {
				for (t = 0; t < movie.length; t++) {
					movie[t].style.display = 'none';
				}
			} else if (pageTab == 'movie') {
				for (m = 0; m < tv.length; m++) {
					tv[m].style.display = 'none';
				}
			} else if (pageTab == 'search') {
				searchFilter();
			}
		}

		function myFunction() {
			let divMovieContent = document.getElementById('container').querySelectorAll('.movie-content');
			let divMovieBlock = document.getElementById('container').querySelectorAll('.block-content');
			let input, filter, body, block, i, a, txtValue;
			document.getElementById('search-page').style.display="none";
			input = document.getElementById('nav-search');
			filter = input.value.toUpperCase();
			for (i = 0; i < movieBlock.length; i++) {


				if (input.value == 0) {
					document.getElementById('search-page').style.display="block";
					movieBlock[i].style.display='none';
					divMovieBlock[i].classList.add('display-none');
				} else {
					if (divMovieBlock[i].classList.contains('display-none')) {
						divMovieBlock[i].classList.remove('display-none')
					} else if (divMovieBlock[i].classList.contains('display-block')) {
						divMovieBlock[i].classList.remove('display-block')
					}
	
					a = movieBlock[i];
					txtValue = a.textContent || a.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						movieBlock[i].style.display='';
						divMovieBlock[i].classList.add('display-block')
					} else {
						movieBlock[i].style.display='none';
						divMovieBlock[i].classList.add('display-none');
					}
				}
			}
		}

		function searchFilter() {
			let divMovieContent = document.getElementById('container').querySelectorAll('.movie-content');
			let divMovieBlock = document.getElementById('container').querySelectorAll('.block-content');
			let i;

			for (i = 0; i < movieBlock.length; i++) {
				if (divMovieBlock[i].classList.contains('display-none')) {
					divMovieBlock[i].style.display='none';
				} else {
					divMovieBlock[i].classList.add('display-block');
				}

			}

		}

		function hideOtherContent() {
			closeEpisodesList()
			let i, e;
			for (i = 0; i < movieContent.length; i++) {
				movieContent[i].style.display = 'none';

			}
			for (e = 0; e < movieBlock.length; e++) {
				movieBlock[e].style.display = 'block';
			}
		}
		
		function showBlock(block,content) {
			closeEpisodesList()
		  	if (content.style.display='flex') {
		    	content.style.display='none'
		    	block.style.display='block'
		  	} else {
		  		content.style.display='none'
		  	}
		  	if (pageTab == 'search') {
		  		block.style.display='none';
		  		content.style.display='none';
		  		document.getElementById("nav-search").focus();
		  		searchContent();
		  	}
		}

		function closeEpisodesList() {
			let x;
			let eb= document.getElementsByClassName('episodes-button');
			let ec = document.getElementsByClassName('movie-episodes-content');
			for (x=0; x < ec.length; x++) {
				ec[x].style.display="none";
			}
			for (x=0; x < eb.length; x++) {
				eb[x].style.color="white";
				eb[x].style.backgroundColor="transparent";
			}
		}

		function showEpisodes(showName,episodeButton) {
			let eb= document.getElementsByClassName('episodes-button');
			let tvShowName = document.getElementById(showName).getElementsByClassName('movie-episodes-content');
			let x;

			for (x=0; x < tvShowName.length; x++) {
				if (tvShowName[x].style.display=="none") {
					tvShowName[x].style.display="block"
					eb[x].style.color="black";
					eb[x].style.backgroundColor="white";
				} else {
					tvShowName[x].style.display="none"
					eb[x].style.color="white";
					eb[x].style.backgroundColor="transparent";
				}
			}

			

		}