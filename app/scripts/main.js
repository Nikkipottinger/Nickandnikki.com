(function () {

    $(document).foundation();

    $("a[href*=#]:not([href=#])").click(function() {
        var target;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
            target = $(this.hash);
            target = (target.length ? target : $("[name=" + this.hash.slice(1) + "]"));
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top - 60
                }, 600);
                return false;
            }
        }
    });

    $(document).scroll(function() {
        var hasSelected, navItems;
        navItems = $(".top-bar-section ul li > a");
        hasSelected = false;
        return navItems.each(function() {
            var getItem;
            getItem = $($(this).attr("href"));
            if (getItem.length > 0 && getItem.next().offset().top > ($(document).scrollTop() + 100) && hasSelected === false) {
                $(this).addClass("selected");
                return hasSelected = true;
            } else {
                return $(this).removeClass("selected");
            }
        });
    });

    $(document).ready(function() {
        $("#clientQuoteCarousel").owlCarousel({
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 700,
            singleItem: true
        });

        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none'
        });
    });

    function initializeCeremonyMap() {
        var latlng = new google.maps.LatLng(51.646672, 0.809456),
            mapOptions = {
                center: latlng,
                zoom: 13,
                maxZoom: 14,
                minZoom: 10,
                scrollwheel: false
            },
            map = new google.maps.Map(document.getElementById('ceremonyMap'),
                mapOptions);

        new google.maps.Marker({
            clickable: true,
            map: map,
            position: latlng,
            icon: new google.maps.MarkerImage('images/pin.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(30, 48),
                // The origin for this image is 0,0.
                new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(15, 48)
            )
        });

        google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(latlng); });
    }
    google.maps.event.addDomListener(window, 'load', initializeCeremonyMap);

    function initializeAccommodationMap() {
        var latlng = new google.maps.LatLng(51.667383, 0.734273),
            mapOptions = {
                center: latlng,
                zoom: 13,
                maxZoom: 14,
                minZoom: 10,
                scrollwheel: false
            },
            map = new google.maps.Map(document.getElementById('accommodationMap'),
                mapOptions),
            markerImg = new google.maps.MarkerImage('images/pin.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(30, 48),
                // The origin for this image is 0,0.
                new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(15, 48)
            );

        new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.667383, 0.734273),
            icon: markerImg
        });

        new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.641570, 0.811063),
            icon: markerImg
        });

        google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(latlng); });
    }
    google.maps.event.addDomListener(window, 'load', initializeAccommodationMap);
}());
