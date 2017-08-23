(function () {
    jQuery(document).ready(function ($) {
        var accebilityImagesFolder = "http://localhost/websitebackup/wp-content/plugins/dq-accessibility/images";
        var video = $('video').get(0);
        var fusion = document.getElementsByClassName("fusion-main-menu")[0];
        $('.slides, #video-controls').mouseenter(function () {
            if ($('#video-controls').css('display') === 'none')
                $('#video-controls').show();
        });
        $('.slides, #video-controls').mouseleave(function () {
            if ($('#video-controls').css('display') !== 'none')
                $('#video-controls').hide();
        });
        var TEMPLATE = '<div class="open-accessibility-cursor-workaround"></div>' +
            '<div class="background-grey-transparency"><img src="' + accebilityImagesFolder + '/icons/background.png"></div>' +
            '<div class="open-accessibility open-accessibility-collapsed"> ' +
            '<div class="open-accessibility-container"> ' +
            '<div class="open-accessibility-expand-button"><img tabindex="1" id="open-accessibility-dqicon" src="' + accebilityImagesFolder + '/icons/accebility.png"></div>' +
            '<div class="open-accessibility-menu">' +
            '<div class="open-accessibility-statement"><img class="accessibility-statement" src="' + accebilityImagesFolder + '/icons/accstat.svg"><span class="dqtooltiptext">הצהרת נגישות</span></div> ' +
            '<div class="open-accessibility-link "><a id="dq_link" target="_blank" href="http://www.dqsoftwaresolutions.com">Powered by DevQuest</a></div> ' +
            '<div class="open-accessibility-close-button">x</div> ' +
            '<div tabindex="2" class="open-accessibility-menu-button open-accessibility-readable-text dq-button-right"><img class="img-right dq-img-acc accessibility-dqeye" src="' + accebilityImagesFolder + '/icons/eye.svg"><p class="right-text dqreadable-text">קורא מסך</p></div> ' +
            '<div tabindex="3" class="open-accessibility-menu-button open-accessibility-keybourd-text dq-button-left"><img class="img-left dq-img-acc accessibility-dqbright"  src="' + accebilityImagesFolder + '/icons/keyboard_bright.svg"><p class="left-text dqkeybourd-text"> ניווט מקלדת</p></div> ' +
            '<div tabindex="4" class="open-accessibility-menu-button open-accessibility-zoom-out-button dq-button-right"><img class="img-right dq-img-acc accessibility-dqminimize" src="' + accebilityImagesFolder + '/icons/minimize.svg"><p class="right-text dqzoom-out-button">הקטן</p></div>' +
            '<div tabindex="4" class="open-accessibility-menu-button open-accessibility-zoom-in-button dq-button-left"><img class="img-left dq-img-acc accessibility-dqmagnify" src="' + accebilityImagesFolder + '/icons/magnify.svg"><p class="left-text dqzoom-in-button">הגדל</p></div>' +
            '<div tabindex="5" class="open-accessibility-menu-button open-accessibility-invert-button dq-button-right"><img class="img-right dq-img-acc accessibility-dqinvert" src="' + accebilityImagesFolder + '/icons/colorswitch.svg"><p class="right-text dqinvert-button"> היפוך צבעים</p></div> ' +
            '<div tabindex="6" class="open-accessibility-menu-button open-accessibility-contrast-button dq-button-left"><img class="img-left dq-img-acc accessibility-dqcontrast" src="' + accebilityImagesFolder + '/icons/contrast.svg"><p class="left-text dqcontrast-button">  ניגודיות</p></div> ' +
            '<div tabindex="7" class="open-accessibility-menu-button open-accessibility-cursor-button dq-button-right"><img class="img-right dq-img-acc accessibility-dqmouse" src="' + accebilityImagesFolder + '/icons/mouse.svg"><p class="right-text dqcursor-button">עכבר גדול</p></div> ' +
            '<div tabindex="8" class="open-accessibility-menu-button open-accessibility-brightness-button dq-button-left"><img class="img-left dq-img-acc accessibility-dqbrightness" src="' + accebilityImagesFolder + '/icons/brightness.svg"><p class="right-text dqbrightness-button">בהירות</p></div> ' +
            '<div tabindex="9" class="open-accessibility-menu-button open-accessibility-monochrome-button dq-button-right"><img class="img-right dq-img-acc accessibility-dqmonochrome" src="' + accebilityImagesFolder + '/icons/grey_scale.svg"><p class="right-text dqmonochrome-button">גווני אפור</p></div> ' +
            '<div tabindex="10" class="open-accessibility-menu-button open-accessibility-stop-animation dq-button-left"><img class="img-left dq-img-acc  accessibility-dqanimation" src="' + accebilityImagesFolder + '/icons/stop.svg"><p class="left-text dqstop-animation">ללא הנפשה</p></div> ' +
            '<div tabindex="11" class="open-accessibility-menu-button open-accessibility-highlight-links dq-button-right"><img class="img-right dq-img-acc accessibility-dqhighlight" src="' + accebilityImagesFolder + '/icons/link.svg"><p class="right-text dqhighlight-links">הבלט לינקים</p></div> ' +
            '<div tabindex="12" class="open-accessibility-menu-button open-accessibility-reset-button dq-button-left"><img class="img-left dq-img-acc accessibility-dqreset" src="' + accebilityImagesFolder + '/icons/undo.svg"><p class="left-text dqreset-button">בטל שינויים</p></div> ' +

            '</div> ' +
            '</div> ' +
            '</div> ' +
            '</div>';
        var HOTKEYPANEL = '<div class="hot-key-collapsed"> ' +
            '<div class="hot-key-container"> ' +
            '<div class="hot-key-menu">' +
            '<div class="hot-key hot-key-menu-a"><p>ctrl c ראשי</p></div>' +
            '<div class=hot-key hot-key-menu-b"><p>ctrl z  צוות מגשרים</p></div>' +
            '<div class=hot-key hot-key-menu-b"><p>ctrl v סוגי גישור</p></div>' +
            '<div class="hot-key hot-key-c"><p>ctrl b הליך גישור</p></div> ' +
            '<div class="hot-key hot-key-c"><p>ctrl q לפגישת יעוץ</p></div> ' +
            '<div class="hot-key hot-key-c"><p>ctrl p פרויקטים</p></div> ' +
            '</div> ' +
            '</div>';

        var VIDEO_CONTROLS = '<div id="video-controls" class="ctrls">' +
            '<button type="button" role="button" id="play-button" class="video-button"><img src="' + accebilityImagesFolder + '/icons/play.svg" alt="play>"</button>' +
            '<button type="button" role="button" id="pause" class="video-button"><img src="' + accebilityImagesFolder + '/icons/stop.svg" alt="pause"></button>' +
            '</div>';
        var LOCAL_STORAGE_OPTIONS_KEY = 'open-accessibility-config';
        var UNITS = ['px', 'cm', 'em', 'ex', 'in', 'mm', 'pc', 'pt', 'vh', 'vw', 'vmin'];

        function getUnit(fontSize) {
            fontSize = fontSize || '';
            return UNITS
                .filter(unit => fontSize.match(new RegExp(unit + '$', 'gi')))
                .pop()
        }

        function isGoogleChrome() {
            var isChromium = window.chrome;
            var winNav = window.navigator;
            var vendorName = winNav.vendor;
            var isOpera = winNav.userAgent.indexOf("OPR") > -1;
            var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
            return (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false);
        }

        function isMobileBrowser() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            var product = userAgent.substr(0, 4);
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(product);
        }

        function getUserOptions() {
            var data;
            try {
                data = localStorage.getItem(LOCAL_STORAGE_OPTIONS_KEY);
                data = JSON.parse(data);
            } catch (e) {}
            if (data && typeof data === "object") {
                return data;
            } else {
                return {};
            }
        }

        function setUserOptions(options) {
            localStorage.setItem(LOCAL_STORAGE_OPTIONS_KEY, JSON.stringify(options));
        }

        function applyTextZoom(selector, zoom) {

            $(selector).not('.open-accessibility *').each(function () {

                var element = $(this);
                var originalFontSize = element.attr('data-open-accessibility-text-original');
                if (!originalFontSize) {
                    originalFontSize = element.css('font-size');
                    element.attr('data-open-accessibility-text-original', originalFontSize);
                }
                var units = getUnit(originalFontSize) || '';
                var fontSize = parseFloat(originalFontSize) * zoom;
                element.css('font-size', fontSize + units);

            });


        }

        function setFocus() {

            var json = localStorage.getItem("open-accessibility-config");
            json = JSON.parse(json);

            if (json.highlightedLinks === false && json.isMobileEnabled === false && json.grayscale === 0 && json.brightness === 100 && json.contrast === 100 && json.zoom === 1 && json.cursor === false && json.invert === false && json.animation === true && json.hyperlinks === false && json.hotkey === false) {

                $(".open-accessibility-menu-button").css("background", "");
            } else {
                var background = '-webkit-linear-gradient(0deg, rgba(123, 190, 216, 1) 1.03%, rgba(120, 187, 213, 1) 7.33%, rgba(113, 181, 208, 1) 31.85%, rgba(111, 179, 206, 1) 100%)'
                if (json.hyperlinks === true) {
                    $(".open-accessibility-highlight-links").css("background", background);
                }
                if (json.zoom > 1) {
                    $(".open-accessibility-zoom-in-button").css("background", background);
                }
                if (json.zoom < 1) {
                    $(".open-accessibility-zoom-out-button").css("background", background);
                }
                if (json.grayscale === 100) {
                    $(".open-accessibility-monochrome-button").css("background", background);
                }
                if (json.contrast !== 100) {
                    $(".open-accessibility-contrast-button").css("background", background);
                }
                if (json.cursor === true) {
                    $(".open-accessibility-cursor-button").css("background", "#9BCDDD");
                }
                if (json.animation === false) {
                    $(".open-accessibility-stop-animation").css("background", "#9BCDDD");
                }
                if (json.invert === true) {
                    $(".open-accessibility-invert-button").css("background", "#9BCDDD");
                }
                if (json.brightness !== 100) {
                    $(".open-accessibility-brightness-button").css("background", "#9BCDDD");
                }
                if (json.hotkey === true) {
                    $(".open-accessibility-keybourd-text").css("background", "#9BCDDD");
                }

            }
        }


        $.fn.openAccessibility = function (customOptions) {
            var element = this;
            customOptions = customOptions || {};
            var defaultOptions = {
                isMenuOpened: false,
                highlightedLinks: false,
                isMobileEnabled: false,
                grayscale: 0,
                brightness: 100,
                contrast: 100,
                maxZoomLevel: 3,
                minZoomLevel: 0.5,
                zoomStep: 0.2,
                zoom: 1,
                cursor: false,
                textSelector: '.open-accessibility-text',
                invert: false,
                animation: true,
                hyperlinks: false,
                readabletext: false,
                hotkey: false
            };
            var userOptions = getUserOptions();
            var initialOptions = $.extend({}, defaultOptions, customOptions);
            var options = $.extend({}, initialOptions, userOptions, customOptions);

            //            if (!options.isMobileEnabled && isMobileBrowser()) {
            //                console.log('disabling accessibility plugin due to mobile browser');
            //                //return;
            //            }
            // -------------
            element.prepend(TEMPLATE);
            $(".open-accessibility-keybourd-text").prepend(HOTKEYPANEL);
            //$("#sliders-container").prepend(VIDEO_CONTROLS);
            var html = $('html');
            var body = $('body');
            var container = $(".open-accessibility");
            var menu = $(".open-accessibility-menu");
            var imgButtons = $(".dq-img-acc, .right-text, left-text");
            var expandButton = $(".open-accessibility-expand-button");
            var closeButton = $(".open-accessibility-close-button");
            var invertButton = $(".open-accessibility-invert-button");
            var cursorButton = $(".open-accessibility-cursor-button");
            var zoomInButton = $(".open-accessibility-zoom-in-button");
            var zoomOutButton = $(".open-accessibility-zoom-out-button");
            var brightnessButton = $(".open-accessibility-brightness-button");
            var monochromeButton = $(".open-accessibility-monochrome-button");
            var contrastButton = $(".open-accessibility-contrast-button");
            var resetButton = $(".open-accessibility-reset-button");
            var cursorWorkaround = $(".open-accessibility-cursor-workaround");
            var stopAnimationButton = $(".open-accessibility-stop-animation");
            var highlightLinksButton = $(".open-accessibility-highlight-links");
            var readabletextButton = $(".open-accessibility-readable-text");
            var keyboardNavigation = $(".open-accessibility-keybourd-text");
            var accessibilityStatement = $(".accessibility-statement");
            var hotKeyMenu = $(".hot-key-collapsed");
            html.addClass('open-accessibility-zoom');
            controlDropDownMenu();
            if (!options.isMobileEnabled && isMobileBrowser()) {

                $(".title-heading-center>span").css("font-size", "30px");
                $(".title-heading-center>pre>span").css("font-size", "20px");
                $(".open-accessibility-keybourd-text").css("display", "none");
                $(".open-accessibility-readable-text").css("display", "none");
                $(".open-accessibility-stop-animation").css("display", "none");
                $(".open-accessibility-cursor-button").css("display", "none");
                $(".open-accessibility-container").css("height", "0px");
                $("#open-accessibility-dqicon").attr("src", accebilityImagesFolder + "/icons/acc-mobile.png")
                $("#open-accessibility-dqicon").css("width", "50px");
                $(".dqtooltiptext").css("display", "none");
                window.addEventListener("orientationchange", function () {
                    var json = localStorage.getItem("open-accessibility-config");
                    json = JSON.parse(json);

                    if (screen.orientation.type === "portrait-primary") {

                        if (json.isMenuOpened === false) {
                            setPortraitOrientation(false);
                        } else {
                            setPortraitOrientation(true);
                        }

                    } else {
                        if (json.isMenuOpened === false) {
                            setLandscapeOrientation(false);
                        } else {
                            setLandscapeOrientation(true);
                        }

                    }

                }, false);

            }

            imgButtons.mouseleave((e) => {
                var button = e.target.parentNode;
                $(button).css("background", "");
                $(button).css("border", "none");
                setFocus()
            });
            imgButtons.mousedown((e) => {
                var button = e.target.parentNode;
                $(button).css("border", "2px solid black");

            });

            // Reset
            resetButton.mousedown(() => {
                options = $.extend({}, initialOptions);
                options.isMenuOpened = false;
                reset(options, apply, initialOptions);

            })
            resetButton.keypress(() => {
                var key = event.keyCode;
                if (key === 13) {
                    options = $.extend({}, initialOptions);
                    options.isMenuOpened = false;
                    reset(options, apply, initialOptions);
                }
            })
            imgButtons.mouseup((e) => {
                var button = e.target.parentNode;
                $(button).css("border", "none");
            });
            keyboardNavigation.mousedown(() => {
                if (options.hotkey === false) {
                    options.hotkey = true;
                    $(".hot-key-collapsed").show();
                } else {
                    options.hotkey = false;
                    $(".hot-key-collapsed").hide();
                }
                apply();
            })
            keyboardNavigation.hover(() => {
                if (options.hotkey === false) {} else {
                    hotKeyMenu.show();
                }

            });
            keyboardNavigation.mouseleave(() => {
                hotKeyMenu.hide();
            });
            // Brightness
            brightnessButton.mousedown(() => {
                brightness(options, apply);

            })
            brightnessButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        brightness(options, apply);
                    }
                })
                // Contrast
            contrastButton.mousedown(() => {
                contrast(options, apply);

            })
            contrastButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        contrast(options, apply);
                    }
                })
                // Grayscale
            monochromeButton.mousedown(() => {
                monochrome(options, apply)

            })
            monochromeButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        monochrome(options, apply);
                    }
                })
                // Zoom
            zoomInButton.mousedown(() => {
                zoomIn(options, apply);

            })
            zoomInButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        zoomIn(options, apply);
                    }
                })
                // Invert
            invertButton.mousedown(() => {

                invert(options, apply);
            })
            invertButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        invert(options, apply);
                    }
                })
                // Cursor
            cursorButton.mousedown(() => {

                cursor(options, apply);
            })
            cursorButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        cursor(options, apply);
                    }
                })
                //ZoomOut
            zoomOutButton.mousedown(() => {
                zoomOut(options, apply);

            })
            zoomOutButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        zoomOut(options, apply);
                    }
                })
                // -------------
                // Stop Animation
            stopAnimationButton.mousedown(() => {
                stopAnimation(options, apply);

            })
            stopAnimationButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        stopAnimation(options, apply);
                    }
                })
                //   HighlightLinks
            highlightLinksButton.mousedown(() => {
                highlightLinks(options, apply);

            })
            highlightLinksButton.keypress(() => {
                    var key = event.keyCode;
                    if (key === 13) {
                        highlightLinks(options, apply);
                    }
                })
                // Readable text
            readabletextButton.mousedown(() => {
                    options.readabletext = !options.readabletext;
                    apply();
                })
                // -------------
                // Menu
            expandButton.keypress(() => {
                var key = event.keyCode;
                if (key === 13) {
                    expand(options, apply);
                }
            });
            expandButton.click(() => {
                expand(options, apply);

            });
            closeButton.click(() => {
                options.isMenuOpened = false;
                apply();
            });
            hotKeyMenu.mousedown((e) => {
                e.stopPropagation();
            })
            accessibilityStatement.mousedown(() => {
                window.open("https://dqsoftwaresolutions.com/he/devquest-projects-app-development-website-building-management-software-2/accessibility/");
            })
            $(".hot-key-close-button").click(() => {
                    hotKeyMenu.hide();
                })
                // Click outside of the menu -> close
            $(document).click((event) => {
                if (!$(event.target).closest('.open-accessibility').length) {
                    if (options.isMenuOpened) {
                        options.isMenuOpened = false;
                        if (!options.isMobileEnabled && isMobileBrowser()) {
                            closeAccessibilityContainer();
                        } else {
                            apply();
                        }

                    }
                }
            });

            expandButton.css("right", "10px");
            menu.hide();
            if (customOptions.isMenuOpened) {
                options.isMenuOpened = true;
                menu.show();

                $("#open-accessibility-dqicon").css("right", "40px");
                // expandButton.hide();
            } else {
                options.isMenuOpened = false;
            }
            // -------------
            // Mouse cursor workaround
            cursorWorkaround.hide();
            var googleChrome = isGoogleChrome();
            if (!googleChrome) {
                $(document).on('mousemove', function (e) {
                    if (!options.cursor) {
                        return;
                    }
                    cursorWorkaround.css({
                        left: e.pageX / options.zoom,
                        top: e.pageY / options.zoom
                    });
                });
            }
            // Initialize

            applyTextZoom(options.textSelector, 1);
            apply();
            //close accessibility container only in moblie
            function closeAccessibilityContainer() {
                menu.hide();
                container.removeClass("open-accessibility-expanded");
                container.addClass("open-accessibility-collapsed");
                $(".open-accessibility").css("position", "");
                $(".open-accessibility").css("z-index", "0");
                $("#open-accessibility-dqicon").css("right", "0px");
                $(".open-accessibility-container").css("height", "0px");
                var json = localStorage.getItem("open-accessibility-config");
                json = JSON.parse(json);
                options.isMenuOpened = false;
                setUserOptions(options);

            }

            function apply() {

                // ----------------
                if (options.isMenuOpened) {

                    // expandButton.fadeOut(300);
                    if (!options.isMobileEnabled && isMobileBrowser()) {

                        if ($(window).height() > $(window).width()) {
                            //   setPortraitOrientation(true);
                            $("#open-accessibility-dqicon").css("right", "15px");

                        } else {
                            //   setLandscapeOrientation(true);
                        }
                    } else {
                        $(".open-accessibility").css("position", "fixed");
                        $(".open-accessibility").css("z-index", "999999999");
                        $(".open-accessibility-container").css("height", "835px");
                        $("#open-accessibility-dqicon").css("right", "60px");
                    }

                    $(".open-accessibility").css("position", "fixed");
                    $(".open-accessibility").css("z-index", "999999999");
                    menu.show();
                    container.removeClass("open-accessibility-collapsed");
                    container.addClass("open-accessibility-expanded");
                } else {
                    if (!options.isMobileEnabled && isMobileBrowser()) {
                        if ($(window).height() > $(window).width()) {

                            setPortraitOrientation(false);

                        } else {
                            setLandscapeOrientation(false);
                        }
                    } else {
                        $(".open-accessibility-container").css("height", "0px");
                    }
                    $(".open-accessibility").css("position", "");
                    $(".open-accessibility").css("z-index", "0");
                    $("#open-accessibility-dqicon").css("right", "0px");
                    menu.hide();
                    container.removeClass("open-accessibility-expanded");
                    container.addClass("open-accessibility-collapsed");
                }
                // ----------------
                // Filters
                var filters = [];
                if (options.invert) {
                    filters.push('invert(1)');
                }
                filters.push('contrast(' + options.contrast + '%)');
                filters.push('brightness(' + options.brightness + '%)');
                filters.push('grayscale(' + options.grayscale + '%)');
                var filterValue = filters.join(' ');
                body.css('filter', filterValue);
                body.css('-ms-filter', filterValue);
                body.css('-moz-filter', filterValue);
                body.css('-webkit-filter', filterValue);
                body.css('-o-filter', filterValue);
                // ----------
                // Zoom

                if (options.zoom !== 1) {

                    applyTextZoom(options.textSelector, options.zoom);

                }

                // ----------
                // Cursor
                if (options.cursor) {
                    html.addClass('open-accessibility-cursor');
                    if (!googleChrome) {
                        cursorWorkaround.show();
                    }
                } else {
                    html.removeClass('open-accessibility-cursor');
                    if (!googleChrome) {
                        cursorWorkaround.hide();
                    }
                }
                if (!options.animation) {
                    //hide the particles in the header of dqsoftwaresolutions.com
                    $(".rs-particles-interactive").css("visibility", "hidden")
                        //replace the gif image with static image in the blog section of dqsoftwaresolutions.com
                    body.addClass('dq-accessibility-disable-animation');
                    var getClass = $(".icon-wrapper-hover-animation-pulsate");

                    $("div .fusion-animated").removeClass('icon-wrapper-hover-animation-pulsate');
                    // document.getElementsByClassName("fusion_builder_column_1_1")[8].addClass('icon-wrapper-hover-animation-pulsate');

                } else {
                    body.removeClass('dq-accessibility-disable-animation');
                    $("div .fusion-animated").addClass('icon-wrapper-hover-animation-pulsate');

                }
                if (options.hotkey) {

                    $(".accessibility-dqbright").attr("src", accebilityImagesFolder + "/icons/keyboard_bright.svg");
                    $(document).bind('keydown', function (e) {
                        if (e.keyCode == 66 && e.ctrlKey) {
                            //b==66 הליך גישור
                            document.getElementById("menu-item-1014").getElementsByTagName("a")[0].click();
                        } else if (e.keyCode == 67 && e.ctrlKey) {
                            //c==66 ראשי
                            document.getElementById("menu-item-1017").getElementsByTagName("a")[0].click();
                        } else if (e.keyCode == 90 && e.ctrlKey) {
                            //z==90  צוות מגשרים
                            document.getElementById("menu-item-1015").getElementsByTagName("a")[0].click();
                        } else if (e.keyCode == 86 && e.ctrlKey) {
                            //v==83 סוגי גישור
                            document.getElementById("menu-item-1013").getElementsByTagName("a")[0].click();
                        } else if (e.keyCode == 81 && e.ctrlKey) {
                            //q==81 לפגישת יעוץ
                            document.getElementById("menu-item-1016").getElementsByTagName("a")[0].click();
                        } else if (e.keyCode == 80 && e.ctrlKey) {
                            //p==80 פרויקטים
                            document.getElementById("menu-item-633").getElementsByTagName("a")[0].click();
                        }
                    });
                } else {
                    $(document).unbind('keydown');
                }
                if (options.hyperlinks) {
                    body.addClass('dq-accessibility-hyperlinks');
                } else {
                    body.removeClass('dq-accessibility-hyperlinks');
                }
                if (!options.readabletext) {
                    body.addClass('dq-accessibility-readable-text');
                } else {
                    body.removeClass('dq-accessibility-readable-text');
                }
                setUserOptions(options);
                setFocus();
            }
        }
        $(".wp-post-image").each(function () {
            $(this).closest("a").attr('target', '_blank');

        });
        $('body').openAccessibility({
            textSelector: "span,p,a,td,table,tr,h5,h6,h4,h1,div,h2,h3"
        });
        $(document).delegate('#play-button', 'click', function () {
            video.load();
            video.play();
            $('#play-button').addClass('hide');
        });
        $(document).delegate('#pause', 'click', function () {
            if (video.paused !== true && video.ended !== true) {
                video.pause();
            } else {
                video.play();
            }
        });
        $(document).delegate('#stop', 'click', function () {
            video.pause();
            video.currentTime = 0;
        });

        function setPortraitOrientation(isMenuOpen) {
            if (isMenuOpen === true) {
                $(".open-accessibility-container").css("height", "501px");
            } else {
                $(".open-accessibility-container").css("height", "0px");
            }
            $(".left-text").css("font-size", "14px");
            $(".right-text").css("font-size", "14px");
            $(".dq-img-acc").css("width", "40%");
            $(".open-accessibility-container").css("width", "246px");
            $(".open-accessibility-menu").css("width", "251px");
            $(".open-accessibility-menu").css("right", "");
            $(".open-accessibility-menu-button").css("height", "82px");
            $(".open-accessibility-menu-button").css("width", "86px");
            $("#dq_link").css("width", "84%");
            $("#dq_link").css("font-size", "16px");
            $("#dq_link").css("right", "7px");
            $("#dq_link").css("bottom", "-23px");
            $(".accessibility-statement").css("right", "239px");
            $(".accessibility-statement").css("top", "18px");
            $("#open-accessibility-dqicon").css("width", "43px");
            $("#open-accessibility-dqicon").css("bottom", "0px");
            $(".open-accessibility-close-button").css("left", "");
            $(".open-accessibility-close-button").css("top", "");
            $(".open-accessibility-brightness-button").css("bottom", "");
            $(".open-accessibility-brightness-button").css("right", "");
            $(".open-accessibility-highlight-links").css("bottom", "");
            $(".open-accessibility-highlight-links").css("right", "");
            $(".open-accessibility-monochrome-button").css("bottom", "");
            $(".open-accessibility-monochrome-button").css("right", "");
            $(".open-accessibility-reset-button").css("bottom", "");
            $(".open-accessibility-reset-button").css("right", "");
            $(".accessibility-statement").css("position", "relative");
            $(".accessibility-statement").css("bottom", "");
            //  $(".accessibility-statement").css("right", "");
        }

        function setLandscapeOrientation(isMenuOpen) {

            if (isMenuOpen === true) {
                $(".open-accessibility-container").css("height", "275px");
                $(".open-accessibility-container").css("width", "500px");
                $("#open-accessibility-dqicon").css("right", "12px");
                $("#open-accessibility-dqicon").css("bottom", "-1px");

            } else {
                $(".open-accessibility-container").css("height", "0px");

            }
            $(".left-text").css("font-size", "14px");
            $(".right-text").css("font-size", "14px");
            $(".dq-img-acc").css("width", "40%");

            $(".open-accessibility-close-button").css("left", "21px");
            $(".open-accessibility-close-button").css("top", "-3%");
            $(".open-accessibility-menu").css("width", "251px");
            $(".open-accessibility-menu").css("right", "26px");
            $(".open-accessibility-menu-button").css("height", "82px");
            $("#dq_link").css("width", "133%");
            $("#dq_link").css("right", "56px");
            $("#dq_link").css("font-size", "18px");

            $(".accessibility-statement").css("right", "423px");
            $(".accessibility-statement").css("top", "19px");
            $("#open-accessibility-dqicon").css("width", "43px");
            $("#open-accessibility-dqicon").css("bottom", "0px");
            $(".open-accessibility-brightness-button").css("bottom", "196px");
            $(".open-accessibility-brightness-button").css("right", "72px");
            $(".open-accessibility-highlight-links").css("bottom", "196px");
            $(".open-accessibility-highlight-links").css("right", "221px");
            $(".open-accessibility-monochrome-button").css("bottom", "196px");
            $(".open-accessibility-monochrome-button").css("right", "325px");
            $(".open-accessibility-reset-button").css("bottom", "196px");
            $(".open-accessibility-reset-button").css("right", "178px");
            $(".accessibility-statement").css("position", "relative");
            $(".accessibility-statement").css("bottom", "175px");
            $(".accessibility-statement").css("right", "422px");
        }

        function controlDropDownMenu() {

            var showMenu = document.getElementsByClassName("menu-text")[0];
            document.onkeyup = function (e) {


                var userInSubMenu = false;
                e = e || window.event;
                if (e.keyCode == 9) {

                    var displayMenu = e.target.getElementsByClassName("fusion-dropdown-svg")[0];
                    var fusionDropdownSubmenu = e.target.parentElement.className;
                    var splitFusionDropdownSubmenu = fusionDropdownSubmenu.split(" ")
                    for (i = 0; i < splitFusionDropdownSubmenu.length; i++) {
                        if (splitFusionDropdownSubmenu[i] === 'fusion-dropdown-submenu') {
                            userInSubMenu = true;
                            break;
                        } else {

                            userInSubMenu = false;
                        }
                    }
                    if (displayMenu !== undefined || userInSubMenu === true) {
                        $(".fusion-dropdown-menu").css("overflow", "visible");
                        $(".sub-menu").css("visibility", "visible");
                        $(".sub-menu").css("opacity", "1");
                        $(".fusion-main-menu").css("overflow", "visible");
                    } else {

                        $(".fusion-dropdown-menu").css("overflow", "hidden");
                        $(".sub-menu").css("visibility", "hidden");
                        $(".sub-menu").css("opacity", "0");
                        $(".fusion-main-menu").css("overflow", "hidden");
                    }
                }

            };

            setTabIndex()
        }
        //set TabIndex in http://www.ets-y.co.il/
        function setTabIndex() {
            var i = 1;
            $(".content-container").each(function () {
                var element = $(this);
                element.attr('tabindex', i);
                i++;
            });

        }

        function zoomIn(options, callback) {
            options.zoom = Math.min(options.maxZoomLevel, options.zoom + options.zoomStep);
            callback();
            var json = localStorage.getItem("open-accessibility-config");
            json = JSON.parse(json);
            if (json.zoom >= 1) {
                $(".open-accessibility-zoom-out-button").css("background", "");
            }
        };

        function zoomOut(options, callback) {
            options.zoom = Math.max(options.minZoomLevel, options.zoom - options.zoomStep);

            var json = localStorage.getItem("open-accessibility-config");
            json = JSON.parse(json);
            if (json.zoom <= 1) {
                $(".open-accessibility-zoom-in-button").css("background", "");
            }
            callback();
        };

        function invert(options, callback) {

            options.invert = !options.invert;
            callback();
        };

        function cursor(options, callback) {
            options.cursor = !options.cursor;
            callback();
        };

        function brightness(options, callback) {
            options.brightness += 50;
            if (options.brightness > 150) {
                options.brightness = 50;
            }
            callback();
        };

        function monochrome(options, callback) {
            options.grayscale += 100;
            if (options.grayscale > 100) {
                options.grayscale = 0;
            }
            callback();
        };

        function contrast(options, callback) {
            options.contrast += 50;
            if (options.contrast > 150) {
                options.contrast = 50;
            }
            callback();
        };

        function stopAnimation(options, callback) {
            options.animation = !options.animation;
            callback();
        };

        function highlightLinks(options, callback) {
            options.hyperlinks = !options.hyperlinks;
            callback();
        };

        function expand(options, callback) {
            if (options.isMenuOpened === true) {
                options.isMenuOpened = false;
            } else {
                options.isMenuOpened = true;
            }
            //  options.isMenuOpened = true;
            if (!options.isMobileEnabled && isMobileBrowser()) {
                if ($(window).height() > $(window).width()) {

                    if (options.isMenuOpened === true) {
                        setPortraitOrientation(true);
                    } else {
                        setPortraitOrientation(false);
                    }


                } else {
                    if (options.isMenuOpened === true) {
                        setLandscapeOrientation(true);
                    } else {
                        setLandscapeOrientation(false);
                    }

                }
            }
            callback();
        };

        function reset(options, callback, initialOptions) {
            $(".open-accessibility-menu-button").each(function () {
                $(this).css("background", "")
            });

            options = $.extend({}, initialOptions);
            options.isMenuOpened = false;
            callback();

            $(".open-accessibility-container").css("height", "0px");

            applyTextZoom(options.textSelector, 1);
        }

        function keyboardNavigation() {};
        // ----------
        //Add controls to video
        //        var video = $('video').get(0);
        //        var close = $(video).closest('div');
        //        close.append($('#video-controls'));
        //        window.addEventListener('load', function () {
        //            function checkLoad() {
        //                if (video == undefined) {
        //                    return;
        //                }
        //                if (video.readyState === 4) {
        //                    var top = (($(video).position().top + $(video).height()) / 2) - $('#video-controls').height() / 2;
        //                    var left = (($(video).position().left + $(video).width()) / 2) - $('#video-controls').width() / 2;
        //                    $('#video-controls').css({
        //                        top: '83%',
        //                        left: '0%',
        //                        position: 'fixed',
        //                        zIndex: '5555'
        //                    });
        //                } else {
        //                    setTimeout(checkLoad, 100);
        //                }
        //            }
        //            checkLoad();
        //        }, false);
    });
})()