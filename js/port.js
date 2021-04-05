    var tab = $('#menu_gnb').find('li');
    var i;

    function tab_menu(num) {
        /*alert((num+1)+'번째 콘텐츠');*/
        /*2-1.for()사용 : 인텍스값 0~4 5번실행*/
        for (i = 0; i < tab.length; i++) {
            if (num == i) {
                tab.eq(i).addClass('active');
                $('.tab_content_0' + i).show();
            } else {
                tab.eq(i).removeClass('active');
                $('.tab_content_0' + i).hide();
            }
        }
    }
