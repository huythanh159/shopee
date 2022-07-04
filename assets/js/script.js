


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productItem = $(".product-item")
const categoryList = $(".category-list")
const categoryItem = $(".category-item")
const categoryAllProduct = $(".product-all")
const homeFilter__btn = $$(".home-filter__btn")
const productAPI = "http://localhost:3000/products"
const productRemoteAPI = "http://localhost:3000/remote"
const productHdmiAPI = "http://localhost:3000/capHdmi"
const btnSignUp = $(".header__navbar-item-js-signup")
const btnSignIn = $(".header__navbar-item-js-signin")
//model
const modal = $(".modal")
const modalBody = $(".modal__body")
const modalOverlay = $(".modal__overlay")
const modalContent = $(".modal")
const modalSignUp = $(".authen-form-js-signup")
const modalSignIn = $(".authen-form-js-signin")

const app = {
    //create request api
    //goi template string all products
    getProducts: function (product) {
        return `   
        <div class="col l-2-4 m-4 c-6">
            <a href="#" class="home-product-item  home-product-item--saleoff home-product-item--like">
            <div class="home-product-item__img"
                style="background-image: url(${product.images[0]});">
            </div>
            <h4 class="home-product-item__name">${product.title}</h4>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">${product.price}</span>
                <span class="home-product-item__price-current">${product.price}</span>
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
                <span class="home-product-item__sold">${product.rating}</span>
            </div>
            <div class="home-product-item__origin">
                <div class="home-product-item__brand">${product.brand}</div>
                <span class="home-product-item__origin-name">${product.stock}</span>
            </div>
            <div class="home-product-item__favourate home-product-item__favourate-has-like">
                <i class="fa-solid fa-check"></i>
                <span>Yêu Thích</span>
            </div>
            <div
                class="home-product-item__sale-off home-product-item__sale-off-has-saleoff">
                <span class="home-product-item__sale-off-percent">${product.discountPercentage}%</span>
                <span class="home-product-item__sale-off-label">GIẢM</span>
            </div>
            </a>
        </div>
    `
    },
    //renderCategory from api
    renderCategory: function () {
        axios
            .get("https://dummyjson.com/products/categories")
            .then(response => {
                response.data.unshift("All")
                console.log(response.data)
                const htmls = response.data.map((category, index) => {

                    let categoryName = category.split("-")
                    categoryName = categoryName.map((category) => {
                        return category.charAt(0).toUpperCase() + category.slice(1)
                    })
                    return `<li  class="category-item ${index === 0 ? "category-list--active" : ""} ${category}">
                                <a href="#" class="category-item__link">${categoryName.join(" ")}</a>
                            </li>`
                })
                categoryList.innerHTML = htmls.join("")
                //goi tung api category
                response.data.forEach((categoryItem, index) =>{
                    $(`.${categoryItem}`).addEventListener("click", () =>{
                        
                        axios
                            .get(`https://dummyjson.com/products/category/${categoryItem}`)
                            .then(response =>{
                                const htmls = response.data.products.map(item =>{
                                    return this.getProducts(item)
                                })
                                productItem.innerHTML = htmls.join("")
                            })
                    })
                    
                })
            })
    },
    test:function(){
        $()
    }
    ,
    // render all products
    renderAll: function () {
        axios
            .get("https://dummyjson.com/products/", { 
                params: { 
                    limit: 20  
                } 
            })
            .then(response => {

                const items = response.data.products
                const htmls = items.map(product => {
                    return this.getProducts(product)
                })
                productItem.innerHTML = htmls.join("")
            })
            .catch(error => console.error(error));
    },
    eventHandle: function () {
        const _this = this

        // home fillter btn
        homeFilter__btn.forEach(item => {
            item.onclick = function () {
                $(".home-filter__btn.btn.btn--primary").classList.remove("btn--primary");
                this.classList.add("btn--primary");
            }
        }),
            //category list 

            //lick btn dang ki and show form
            btnSignUp.addEventListener("click", (e) => {
                modal.classList.add("open")
                modalSignIn.classList.add("close")
            })
        //Lick btn dang nhap and show form
        btnSignIn.addEventListener("click", () => {
            modal.classList.add("open")
            modalSignUp.classList.add("close")
        })
        //modal body
        modal.addEventListener("click", (e) => {
            if (e.target.closest(".modal__overlay")) {
                modal.classList.remove("open")
                modalSignIn.classList.remove("close")
                modalSignUp.classList.remove("close")
            }
        })
    },

    start: function () {
        this.eventHandle()
        this.renderAll()
        this.renderCategory()
    }

}
app.start()











