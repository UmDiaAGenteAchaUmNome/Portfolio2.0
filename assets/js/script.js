
    /***---------- Preloader Loader ----------***/

    window.addEventListener("load", function() {
        document.querySelector(".preloader").classList.add("opacity");
        setTimeout(function() {
            document.querySelector(".preloader").style.display = "none";
        }, 1000);
    });

    /***---------- Portfolio Item Filter ----------***/

    const filterContainer = document.querySelector(".portfolio-filter");
    const filterBtns = filterContainer.children;
    const totalFilterBtn = filterBtns.length;
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const totalPortfolioItem = portfolioItems.length;

        for (let i = 0; i < totalFilterBtn; i++) {
            filterBtns[i].addEventListener("click", function() {
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");
                
                for (let b = 0; b < totalPortfolioItem; b++) {
                    if (filterValue === portfolioItems[b].getAttribute("data-category")) {
                        portfolioItems[b].classList.remove("hide");
                        portfolioItems[b].classList.add("show");
                    }
                    else {
                        portfolioItems[b].classList.remove("show");
                        portfolioItems[b].classList.add("hide");
                    }
                    if (filterValue === "all") {
                        portfolioItems[b].classList.remove("hide");
                        portfolioItems[b].classList.add("show");
                    }
                }

            });
        }
          
    /***---------- Portfolio Lightbox ----------***/ 

    const lightbox = document.querySelector(".lightbox"),
          lightboxImg  = lightbox.querySelector(".lightbox-img"),
          lightboxClose = lightbox.querySelector(".lightbox-close i"),
          lightboxText = lightbox.querySelector(".caption-text"),
          lightboxCounter = lightbox.querySelector(".caption-counter");
    let itemIndex = 0;

        for (let i = 0; i < totalPortfolioItem; i++) {
            portfolioItems[i].addEventListener("click", function() {
                itemIndex = i;
                changeItem();
                toggleLightbox();
            });
        }

        // Next Portfolio
        function nextItem() {
            if (itemIndex == totalPortfolioItem - 1) {
                itemIndex = 0;
            }
            else {
                itemIndex++;
            }
            changeItem();
        }

        //Prev Portfolio
        function prevItem() {
            if (itemIndex == 0) {
                itemIndex = totalPortfolioItem - 1;
            }
            else {
                itemIndex--;
            }
            changeItem();
        }

        function toggleLightbox() {
            lightbox.classList.toggle("open");
        }

        function changeItem() {
            imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
            lightboxImg.src = imgSrc;
            lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
        }

    /***---------- Lightbox Close ----------***/ 

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightboxClose || event.target === lightbox) {
            toggleLightbox();
        }
    });

    /***---------- Aside Navbar ----------***/

    const navbar  = document.querySelector(".nav");
    const navlist = navbar.querySelectorAll("li");
    const totalNavList = navlist.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;

        for (let i = 0; i < totalNavList; i++) {
            const a = navlist[i].querySelector("a");

            a.addEventListener("click", function() {
                removeBackSectionClass();

                for (let b = 0; b < totalNavList; b++) {
                    if (navlist[b].querySelector("a").classList.contains("active")) {
                        addBackSectionClass(b);
                    }
                    navlist[b].querySelector("a").classList.remove("active");
                }

                this.classList.add("active");
                showSection(this);

                if (window.innerWidth < 1200) {
                    asideSectionTogglerBtn();
                }

            });
        }

    //Blog and BlogPost
    const blog      = document.querySelector(".blog");
    const blogPost  = blog.querySelectorAll(".link");
    const totalBlog = blogPost.length;

        for (let i = 0; i < totalBlog; i++) {
            const a = blogPost[i].querySelector("a");

            a.addEventListener("click", function() {
                removeBackSectionClass();

                for (let b = 0; b < totalBlog; b++) {
                    if (blogPost[b].querySelector("a").classList.contains("active")) {
                        addBackSectionClass(b);
                    }
                    blogPost[b].querySelector("a").classList.remove("active");
                }

                this.classList.add("active");
                showSection(this);

            });
        }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    function removeBackSectionClass() {
        for (let t = 0; t < totalSection; t++) {
            allSection[t].classList.remove("back-section");
        } 
    }

    function addBackSectionClass(num) {
        allSection[num].classList.add("back-section");
    }

    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navlist[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".here-me").addEventListener("click", function() {
        const sectionIndex = this.getAttribute("data-section");
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    });

    /***---------- Navbar Toggler ----------***/

    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }







    