/*
 * 👨‍💻 **Author:** ***Towhidul Islam***
 * 🪪 **License:** 1 ☕️ = Free forever ($5)
 * ☕️ [Buy me a Coffee:](https://bmc.link/webtowhid)
 * For each gallery
 * Create a new function
 * Target Gallery ID
 * Call that function
 * That's it!
*/

$(function() {
    skb_random_gallery_1();
    skb_random_gallery_2();
    skb_random_gallery_3();
    skb_random_gallery_4();
    skb_random_gallery_5();
    skb_random_gallery_6();
    skb_random_gallery_7();
    skb_random_gallery_8();

    setInterval(function() {
        skb_random_gallery_1();
        skb_random_gallery_2();
        skb_random_gallery_3();
        skb_random_gallery_4();
        skb_random_gallery_5();
        skb_random_gallery_6();
        skb_random_gallery_7();
        skb_random_gallery_8();
    }, 5000);

    function skb_random_gallery_1() {
        var imgList = $('#skbrg-1');
        var listImg = imgList.find('img');
        var number = listImg.length;
        console.log(number);
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1;
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }

    function skb_random_gallery_2() {
        var imgList = $('#skbrg-2');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }

     function skb_random_gallery_3() {
         var imgList = $('#skbrg-3');
         var listImg = imgList.find('img');
         var number = listImg.length;
         var random = Math.floor((Math.random() * number));
         if(listImg.eq(random).hasClass('active')) {
             var random = random + 1
         }
         listImg.eq(random).addClass('active')
         .siblings().removeClass('active');
     }
     function skb_random_gallery_4() {
        var imgList = $('#skbrg-4');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }
    function skb_random_gallery_5() {
        var imgList = $('#skbrg-5');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }
    function skb_random_gallery_6() {
        var imgList = $('#skbrg-6');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }    
    function skb_random_gallery_7() {
        var imgList = $('#skbrg-7');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }    
    function skb_random_gallery_8() {
        var imgList = $('#skbrg-8');
        var listImg = imgList.find('img');
        var number = listImg.length;
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {
            var random = random + 1
        }
        listImg.eq(random).addClass('active')
        .siblings().removeClass('active');
    }
});