(function() {

    function delayedLoad(){
        var script = document.createElement("SCRIPT");
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            var $ = window.jQuery;
            $("select").select2()

            // a little bit of re-styling for prod
            if (window.location.hostname.indexOf("ext.nat") > -1) {
                $("#header").css("background", "#FA3535");
                $("body").append(
                    `<div id="warnBox" style="bottom: 0px; width: 75%; position: fixed; left: 50%; margin-left: -37.5%;">
<div style="padding: 10px; font-size: 18px; font-weight: bold; color: white; width: 40%; text-align: center; background: red; margin: 0 auto; border-radius: 2px;">
PROD: SERIOUS</div>
</div>`)
                blinker("#warnBox")

                function blinker(id){
                    $(id).fadeTo(1000, 0.65, function(){
                        $(id).fadeTo(1000, 1, function(){
                            blinker(id);
                        })
                    });
                }
            }
            // a little bit of re-styling for non-prod-prod
            else if (window.location.hostname.indexOf("intnonprod.api.extnp.nat") > -1) {
                $("#header").css("background", "orange");
                $("body").append(
                    `<div id="warnBox" style="bottom: 0px; width: 75%; position: fixed; left: 50%; margin-left: -37.5%;">
<div style="padding: 10px; font-size: 18px; font-weight: bold; color: white; width: 40%; text-align: center; background: orange; margin: 0 auto; border-radius: 2px;">
NONPROD PROD: (mostly) SERIOUS</div>
</div>`)
                blinker("#warnBox")

                function blinker(id){
                    $(id).fadeTo(1000, 0.65, function(){
                        $(id).fadeTo(1000, 1, function(){
                            blinker(id);
                        })
                    });
                }
            };
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    window.addEventListener('load', delayedLoad);
})();
