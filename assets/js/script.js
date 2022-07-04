const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productItem = $(".product-item")
const categoryItem = $$(".category-item")
const categoryRemote = $(".product-remote")
const categoryHdmi = $(".product-hdmi")
const categoryAllProduct = $(".product-all")
const homeFilter__btn = $$(".home-filter__btn")
const modal = $(".modal")
const productAPI = "http://localhost:3000/products"
const productRemoteAPI = "http://localhost:3000/remote"
const productHdmiAPI = "http://localhost:3000/capHdmi"
const app = {
    renderAll: function () {
        fetch(productAPI)
            .then(function (response) {
                return response.json()
            })
            .then(function (products) {
                // console.log(products)
                const htmls = products.map((product, index) => {
                    return `
                        <div class="col l-2-4 m-4 c-6">
                            <a href="#" class="home-product-item  home-product-item--saleoff home-product-item--like">
                                <div class="home-product-item__img"
                                    style="background-image: url(${product.image});">
                                </div>
                                <h4 class="home-product-item__name">${product.title}</h4>
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
            })
    },
    eventHandle: function() {
        const _this = this
        //loc ra tat ca cac san pham
        categoryAllProduct.addEventListener("click", () =>{
            _this.renderAll()
        })
        //loc ra san pham la remote
        categoryRemote.addEventListener("click", () => {
            fetch(productRemoteAPI)
            .then(function (response) {
                return response.json()
            })
            .then(function (productsRemote) {
                // console.log(productsRemote)
                const htmls = productsRemote.map((productRemote, index) => {
                    return `
                        <div class="col l-2-4 m-4 c-6">
                            <a href="#" class="home-product-item  home-product-item--saleoff home-product-item--like">
                                <div class="home-product-item__img"
                                    style="background-image: url(${productRemote.image});">
                                </div>
                                <h4 class="home-product-item__name">${productRemote.title}</h4>
                                <div class="home-product-item__price">
                                    <span class="home-product-item__price-old">${productRemote.oldPrice}</span>
                                    <span class="home-product-item__price-current">${productRemote.currentPrice}</span>
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
                                    <span class="home-product-item__sold">${productRemote.soldQuantity}</span>
                                </div>
                                <div class="home-product-item__origin">
                                    <div class="home-product-item__brand">${productRemote.brand}</div>
                                    <span class="home-product-item__origin-name">${productRemote.originName}</span>
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
            })
        })
        //loc ra cac san pham la cap hdmi
        categoryHdmi.addEventListener("click", () =>{
            fetch(productHdmiAPI)
            .then(function (response) {
                return response.json()
            })
            .then(function (productsHdmi) {
                // console.log(productsHdmi)
                const htmls = productsHdmi.map((productHdmi, index) => {
                    return `
                        <div class="col l-2-4 m-4 c-6">
                            <a href="#" class="home-product-item  home-product-item--saleoff home-product-item--like">
                                <div class="home-product-item__img"
                                    style="background-image: url(${productHdmi.image});">
                                </div>
                                <h4 class="home-product-item__name">${productHdmi.title}</h4>
                                <div class="home-product-item__price">
                                    <span class="home-product-item__price-old">${productHdmi.oldPrice}</span>
                                    <span class="home-product-item__price-current">${productHdmi.currentPrice}</span>
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
                                    <span class="home-product-item__sold">${productHdmi.soldQuantity}</span>
                                </div>
                                <div class="home-product-item__origin">
                                    <div class="home-product-item__brand">${productHdmi.brand}</div>
                                    <span class="home-product-item__origin-name">${productHdmi.originName}</span>
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
            })
        })
        // home fillter btn
        homeFilter__btn.forEach(item => {
            item.onclick = function() {
                $(".home-filter__btn.btn.btn--primary").classList.remove("btn--primary");
                this.classList.add("btn--primary");
            }
        }),
        //category list 
        categoryItem.forEach(item => {
            item.onclick = function () {
                $(".category-item.category-list--active").classList.remove("category-list--active");
                this.classList.add("category-list--active");
            }
        })
    },
    
    start: function () {
        this.eventHandle()
        this.renderAll()
        this.renderCategory()
        console.log("load done")
        console.log($(".smartphones"))
    }

}   
app.start()








