$('.navbar').on('activate.bs.scrollspy', function () {
    var activeContainer = $(this).find('li.active a').attr('href');
    activeContainer = activeContainer.substring(1);
    switch (activeContainer) {
        case 'home':
            $('.navbar-default').css('border-color', '#818181');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#11749e',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#ffffff');
            break;
        case 'about':
            $('.navbar-default').css('border-color', 'white');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#ffffff',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#ffffff');
            break;
        case 'events':
            $('.navbar-default').css('border-color', 'transparent');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#818181',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#000000');
            break;
        case 'programmes':
            $('.navbar-default').css('border-color', '#818181');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#11749e',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#ffffff');
            break;
        case 'faculty':
            $('.navbar-default').css('border-color', 'transparent');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#818181',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#000000');
            break;
        case 'contact':
            $('.navbar-default').css('border-color', '#818181');
            $('.nav.navbar-nav > .active > a').css({
                'border-bottom-color': '#11749e',
                'background-color': 'transparent'
            });
            $('.nav.navbar-nav.navbar.navbar-right li a').css('color', '#ffffff');
            break;
        default:
            $('.navbar-default').css('border-color', 'transparent');
            $('.nav.navbar-nav > .active > a').css('border-bottom-color', '#818181');
    }
    console.log(activeContainer + ' activated');
});