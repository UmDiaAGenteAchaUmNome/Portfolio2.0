
    /***---------- Style Switcher ----------***/

    const links = document.querySelectorAll(".alternate-style");
    const totalLinks = links.length;

    function setActiveStyle(color) {
        for (let i = 0; i < totalLinks; i++) {
            if (color === links[i].getAttribute("title")) {
                links[i].removeAttribute("disabled");
            }
            else {
                links[i].setAttribute("disabled", "true");
            }
        }
    }

    $("a[href='#']").on("click", (function(e) {
		e.preventDefault();
    }));

    /***---------- Body Skin ----------***/

    const bodySkin = document.querySelectorAll(".body-skin");
    const totalBodySkin = bodySkin.length;

        for (let i = 0; i < totalBodySkin; i++) {
            bodySkin[i].addEventListener("change", function() {
                if (this.value === "dark") {
                    document.body.className = "dark";
                }
                else {
                    document.body.className = "";
                }
            });
        }
    
    /***---------- Switcher Toggle ----------***/

    document.querySelector(".toggle-switcher").addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });