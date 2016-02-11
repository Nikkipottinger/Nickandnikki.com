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
            clickable: false,
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
        var latlng = new google.maps.LatLng(51.662849, 0.809033),
            mapOptions = {
                center: latlng,
                zoom: 11,
                maxZoom: 20,
                minZoom: 8,
                scrollwheel: false
            },
            map = new google.maps.Map(document.getElementById('accommodationMap'),
                mapOptions),
            markerImg = new google.maps.MarkerImage('images/pin_hotel.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(30, 48),
                // The origin for this image is 0,0.
                new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(15, 48)
            );

        var hotel1Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">Ye Olde White Harte</h2><a target="_blank" class="theme-black" href="http://www.whiteharteburnham.co.uk/">http://www.whiteharteburnham.co.uk/</a>'
        });
        var hotel1Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.624965, 0.817605),
            icon: markerImg,
            title: 'Ye Olde White Harte'
        });
        hotel1Marker.addListener('click', function() {
            hotel1Info.open(map, hotel1Marker);
        });

        var hotel2Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Thatched Cottages</h2><a target="_blank" class="theme-black" href="http://www.thethatchedcottages.co.uk/">http://www.thethatchedcottages.co.uk/</a>'
        });
        var hotel2Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.641570, 0.811063),
            icon: markerImg,
            title: 'The Thatched Cottages'
        });
        hotel2Marker.addListener('click', function() {
            hotel2Info.open(map, hotel2Marker);
        });

        var hotel3Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">Crouch Valley Motel</h2><a target="_blank" class="theme-black" href="http://www.crouchvalley.com/BOC/service.asp?ccd=crouch_valley_hotel">http://www.crouchvalley.com/</a>'
        });
        var hotel3Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.667383, 0.734273),
            icon: markerImg,
            title: 'Crouch Valley Motel'
        });
        hotel3Marker.addListener('click', function() {
            hotel3Info.open(map, hotel3Marker);
        });

        var hotel4Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Royal Burnham Yacht Club</h2><a target="_blank" class="theme-black" href="http://www.rbyc.org.uk/accommodation.asp">http://www.rbyc.org.uk/accommodation.asp/</a>'
        });
        var hotel4Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.624682, 0.820321),
            icon: markerImg,
            title: 'The Royal Burnham Yacht Club'
        });
        hotel4Marker.addListener('click', function() {
            hotel4Info.open(map, hotel4Marker);
        });

        var hotel5Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Anchor Hotel</h2><a target="_blank" class="theme-black" href="http://www.theanchorburnham.co.uk/">http://www.theanchorburnham.co.uk/</a>'
        });
        var hotel5Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.624965, 0.819478),
            icon: markerImg,
            title: 'The Anchor Hotel'
        });
        hotel5Marker.addListener('click', function() {
            hotel5Info.open(map, hotel5Marker);
        });

        var hotel6Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">Burnt Mills Cottage</h2><a target="_blank" class="theme-black" href="http://burntmillcottagebandb.com/home.php">http://burntmillcottagebandb.com/</a>'
        });
        var hotel6Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.641495, 0.815272),
            icon: markerImg,
            title: 'Burnt Mills Cottage'
        });
        hotel6Marker.addListener('click', function() {
            hotel6Info.open(map, hotel6Marker);
        });

        var hotel7Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">Forty Winks B and B </h2><a target="_blank" class="theme-black" href="http://www.fortywinksburnham.co.uk/">http://www.fortywinksburnham.co.uk/</a>'
        });
        var hotel7Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.664562, 0.831615),
            icon: markerImg,
            title: 'Forty Winks B and B '
        });
        hotel7Marker.addListener('click', function() {
            hotel7Info.open(map, hotel7Marker);
        });

        var hotel8Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Blue Boar Hotel</h2><a target="_blank" class="theme-black" href="http://www.blueboarmaldon.co.uk/">http://www.blueboarmaldon.co.uk/</a>'
        });
        var hotel8Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.731953, 0.676418),
            icon: markerImg,
            title: 'The Blue Boar Hotel'
        });
        hotel8Marker.addListener('click', function() {
            hotel8Info.open(map, hotel8Marker);
        });

        var hotel9Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Railway Hotel</h2><a target="_blank" class="theme-black" href="http://therailwayhotelburnham.mobi/">http://therailwayhotelburnham.mobi/</a>'
        });
        var hotel9Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.631507, 0.815528),
            icon: markerImg,
            title: 'The Railway Hotel'
        });
        hotel9Marker.addListener('click', function() {
            hotel9Info.open(map, hotel9Marker);
        });

        var hotel10Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-red">The Oyster Smack Inn</h2><a target="_blank" class="theme-black" href="http://www.theoystersmackinn.co.uk/">http://www.theoystersmackinn.co.uk/</a>'
        });
        var hotel10Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.629079, 0.814813),
            icon: markerImg,
            title: 'The Oyster Smack Inn'
        });
        hotel10Marker.addListener('click', function() {
            hotel10Info.open(map, hotel10Marker);
        });

        var hotel11Info = new google.maps.InfoWindow({
            content: '<h2 class="accommodation-info-title theme-orange">The Oakland Hotel</h2><a target="_blank" class="theme-black" href="www.theoaklandhotel.co.uk/">http:/www.theoaklandhotel.co.uk/</a>'
        });
        var hotel11Marker = new google.maps.Marker({
            clickable: true,
            map: map,
            position: new google.maps.LatLng(51.644682, 0.618995),
            icon:new google.maps.MarkerImage('images/pin-hotel-red.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(30, 48),
                // The origin for this image is 0,0.
                new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(15, 48)
            ),
            title: 'The Oakland Hotel'
        });
        hotel11Marker.addListener('click', function() {
            hotel11Info.open(map, hotel11Marker);
        });

        var venueMarker = new google.maps.Marker({
            clickable: false,
            map: map,
            position: new google.maps.LatLng(51.646672, 0.809456),
            icon: new google.maps.MarkerImage('images/pin.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(30, 48),
                // The origin for this image is 0,0.
                new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(15, 48)
            ),
            title: 'Mangapp Manor'
        });

        google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(latlng); });
    }
    google.maps.event.addDomListener(window, 'load', initializeAccommodationMap);
}());
