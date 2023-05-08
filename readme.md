# SKB RANDOM IMAGES GRID GALLERY

### Preview
[Live Demo](http://www.shopifykingbd.com/random-grid-gallery)

![SKB-RANDOM-IMAGES-GRID-GALLERY](https://user-images.githubusercontent.com/89340400/236777209-67105aa6-6a7b-44e5-aefc-b5e25ad98ba5.jpg)

### Sponsors
| [<img src="https://user-images.githubusercontent.com/89340400/236772293-47a77bbb-b182-451a-a730-c8d8a1c1fb63.png" alt="shopifykingbd">](http://www.shopifykingbd.com/) | [<img src="https://dummyimage.com/360x180/f9d949/000000.jpg&text=++YOUR+LOGO" alt="Your logo">](https://www.buymeacoffee.com/webtowhid) |
| ----------- | ----------- |


### Basic Skeleton
```HTML
<section class="skbrg-section">
    <div class="skbrg-container">
        <ul class="skbrg-list">
            <li>
                <div class="skbrg-content">
                    <div class="skbrg-content-inner">
                        <!-- Content -->
                    </div>
                </div>

                <div class="skbrg-image">
                    <!-- Single image -->
                </div>

                <div class="skbrg-gallery" id="skbrg-1">
                    <!-- Multiple images -->
                </div>
            </li>
        </ul>
    </div>
</section>
```


### Content Box
```html
<li>
    <div class="skbrg-content">
        <div class="skbrg-content-inner">
            <h3>webTowhid</h3>
            <h2>ShopifyKingBD</h2>
        </div>
    </div>
</li>
```



### Single image
```html
<li>
    <div class="skbrg-image">
        <img src="https://dummyimage.com/1080x1080/0B2447/fff.jpg&text=+Single+Image+" alt="img">
    </div>
</li>
```



### Image Gallery
```html
<li>
    <div class="skbrg-gallery" id="skbrg-1">
        <img src="https://dummyimage.com/1080x1080/0B2447/fff.jpg&text=+01+" alt="img">
        <img src="https://dummyimage.com/1080x1080/19376D/fff.jpg&text=+02+" alt="img">
        <img src="https://dummyimage.com/1080x1080/576CBC/fff.jpg&text=+03+" alt="img">
        <img src="https://dummyimage.com/1080x1080/A5D7E8/fff.jpg&text=+04+" alt="img">
        <img src="https://dummyimage.com/1080x1080/002B5B/fff.jpg&text=+05+" alt="img">
        <img src="https://dummyimage.com/1080x1080/1A5F7A/fff.jpg&text=+06+" alt="img">
        <img src="https://dummyimage.com/1080x1080/159895/fff.jpg&text=+07+" alt="img">
        <img src="https://dummyimage.com/1080x1080/3E54AC/fff.jpg&text=+08+" alt="img">
        <img src="https://dummyimage.com/1080x1080/3E54AC/fff.jpg&text=+09+" alt="img">
        <img src="https://dummyimage.com/1080x1080/7C96AB/fff.jpg&text=+10+" alt="img">
    </div>
</li>
```





### Activate Gallery

* Need **jQuery latest**  `https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js`
* Gallery **ID**
```javascript
$(function() {
    skb_gallery_1();

    setInterval(function() {
        skb_gallery_1();
    }, 5000);

    function skb_gallery_1() {
        var imgList = $('#skbrg-1');  // Gallery ID
        var listImg = imgList.find('img');
        var number = listImg.length;
        console.log(number);
        var random = Math.floor((Math.random() * number));
        if(listImg.eq(random).hasClass('active')) {  // active class
            var random = random + 1;
        }
        listImg.eq(random).addClass('active') // active class
        .siblings().removeClass('active');   // active class
    }
});
````


## Conclusion

 * 👨‍💻 **Author:** ***Towhidul Islam***
 * 🔗 **website:** [ShoifyKingBD](https://shopifykingbd.com)
 * 🪪 **License:** 1 ☕️ = Free forever ($5)
 * ☕️ [Buy me a Coffee:](https://bmc.link/webtowhid)
 * ✅ Your logo at [sponsors](https://github.com/shopifykingbd/skb-random-grid-gallery#sponsors) 🎉
 * 🙏 Thanks for your support! 
 
