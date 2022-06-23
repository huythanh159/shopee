const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productItem = $(".product-item")
const app = {
    products: [
        {
            "image": "https://cf.shopee.vn/file/45bde0d224a0105f195ff2ed53cbeb4a_tn",
            "name": "[Hàng chính hãng] Remote Điều khiển TV Panasonic có hỗ trợ giọng nói TH-43FX550V/ TH-49FX550V/ TH-49FX650V/TH-55FX650V",
            "oldPrice": "100.000",
            "currentPrice": "79.000",
            "brand": "Whoo",
            "originName": "Japan",
            "soldQuantity": "88"
        },
        {
            "image": "https://cf.shopee.vn/file/dd4cf6878e468abdc8bdd7e76b00f6a2_tn",
            "name": "Điều khiển Tivi SONY Smart Internet-Model TX300P Hàng Xuất MALAYSIA Chất Lượng Cao",
            "oldPrice": "80.000",
            "currentPrice": "49.900",
            "brand": "MALAYSIA",
            "originName": "HaNoi",
            "soldQuantity": "6.5k"
        },
        {
            "image": "https://cf.shopee.vn/file/61a541b59158acc3b6db3496ed9b4d20",
            "name": "REMOTE ĐIỀU KHIỂN TIVI SAMSUNG 4K SMART CONG (LƯNG ĐEN-KHÔNG VOICE-GIÁ THƠM)",
            "oldPrice": "50.000",
            "currentPrice": "28.900",
            "brand": "TP HCM",
            "originName": "Korea",
            "soldQuantity": "101"
        }
        ,
        {
            "image": "https://cf.shopee.vn/file/61a541b59158acc3b6db3496ed9b4d20",
            "name": "REMOTE ĐIỀU KHIỂN TIVI SAMSUNG 4K SMART CONG (LƯNG ĐEN-KHÔNG VOICE-GIÁ THƠM)",
            "oldPrice": "50.000",
            "currentPrice": "28.900",
            "brand": "TP HCM",
            "originName": "Korea",
            "soldQuantity": "101"
        },
        {
            "image": "https://cf.shopee.vn/file/61a541b59158acc3b6db3496ed9b4d20",
            "name": "REMOTE ĐIỀU KHIỂN TIVI SAMSUNG 4K SMART CONG (LƯNG ĐEN-KHÔNG VOICE-GIÁ THƠM)",
            "oldPrice": "50.000",
            "currentPrice": "28.900",
            "brand": "TP HCM",
            "originName": "Korea",
            "soldQuantity": "101"
        },
        {
            "image": "https://cf.shopee.vn/file/61a541b59158acc3b6db3496ed9b4d20",
            "name": "REMOTE ĐIỀU KHIỂN TIVI SAMSUNG 4K SMART CONG (LƯNG ĐEN-KHÔNG VOICE-GIÁ THƠM)",
            "oldPrice": "50.000",
            "currentPrice": "28.900",
            "brand": "TP HCM",
            "originName": "Korea",
            "soldQuantity": "101"
        }
    ],
    render: function () {
        const htmls = this.products.map((product, index) => {
            return `
                <div class="col l-2-4 m-4 c-6">
                    <a href="#" class="home-product-item  home-product-item--saleoff home-product-item--like">
                        <div class="home-product-item__img"
                            style="background-image: url(${product.image});">
                        </div>
                        <h4 class="home-product-item__name">${product.name}</h4>
                        <div class="home-product-item__price">
                            <span class="home-product-item__price-old">${product.oldPrice}</span>
                            <span class="home-product-item__price-current">${product.currentPrice}</span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like">
                                <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                                <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">${product.soldQuantity}</span>
                        </div>
                        <div class="home-product-item__origin">
                            <div class="home-product-item__brand">${product.brand}</div>
                            <span class="home-product-item__origin-name">${product.originName}</span>
                        </div>
                        <div class="home-product-item__favourate home-product-item__favourate-has-like">
                            <i class="fa-solid fa-check"></i>
                            <span>Yêu Thích</span>
                        </div>
                        <div
                            class="home-product-item__sale-off home-product-item__sale-off-has-saleoff">
                            <span class="home-product-item__sale-off-percent">10%</span>
                            <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
                </div>
            `
        })
        productItem.innerHTML = htmls.join("")
    },
    start: function () {
        this.render()
    }

}
app.start()

// home fillter btn

const homeFilter__btn = $$(".home-filter__btn");
homeFilter__btn.forEach(e => {
    e.onclick = function () {
        $(".home-filter__btn.btn.btn--primary").classList.remove("btn--primary");
        this.classList.add("btn--primary");
    }
});

//category list 
const categoryItem = $$(".category-item");
categoryItem.forEach(e => {
    e.onclick = function () {
        $(".category-item.category-list--active").classList.remove("category-list--active");
        this.classList.add("category-list--active");
    }
});