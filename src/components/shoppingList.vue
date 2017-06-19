<template>
    <div class="shopping-list">
        <div id="search" class="search">
            <div class="search-input">
                <input type="text" v-model="searchText" placeholder="输入商品名称或编码查询" />
            </div>
            <div class="shopping-btn">
                <router-link tag="button" to="/shoppingCart">
                    <img src="../assets/image/shopping-cart.png" />
                    <span>购物车</span>
                    <span v-if="shoppingCartListNumberFlag">{{ shoppingCartListNumber }}</span>
                </router-link>
            </div>
        </div>
        <div class="quick-search-box">
            <div class="quick-search" @click="quickSearch">
                <button class="active">全部品类</button>
                <button>休闲零食</button>
                <button>酒水饮料</button>
                <button>粮油副食</button>
                <button>生鲜水果</button>
                <button>日常洗护</button>
            </div>
        </div>
        <div class="shoppingList-screen">
            <div v-for="shopping in shoppingList" title="加入购物车">
                <img :src="imgUrl(shopping)" />
                <div>
                    <p>{{ shopping.name }}</p>
                    <p>￥<span>{{ shopping.price }}</span></p>
                    <p>库存<span>&nbsp;{{ shopping.number }}&nbsp;</span>件</p>
                </div>
                <div @click="addShoppingCart(shopping)"></div>
            </div>
        </div>

    </div>
</template>

<script>

    import { mapState, mapGetters } from 'vuex'

    export default {
        name:　'shoppingList',
        data () {
            return {
                searchText: '',
                allShoppingList: this.$store.state.shoppingList,
                shoppingList: this.$store.state.shoppingList,
            }
        },
        watch: {
            // 搜索商品
            searchText: function (val) {
                this.shoppingList = this.allShoppingList.filter(function (shopping) {
                   if (shopping.name.includes(val) || shopping.coding.includes(val)) {
                       return shopping;
                   }  
                });
            },
        },
        computed: {
            ...mapState([
                'shoppingCartListNumberFlag',
                'shoppingCartList',
            ]),
            ...mapGetters([
                'shoppingCartListNumber',
            ]),
        },
        methods: {
            // 商品图片
            imgUrl (shopping) {
                // webpack中一切皆模块，都可以用require引入
                return require('../assets/shopping-images/' + shopping.coding + '.jpg');
            },
            // 添加商品至购物车列表
            addShoppingCart (shopping) {
                if (!this.shoppingCartList.includes(shopping) && (shopping.number > 0)) {
                    this.$store.commit('addShoppingCart', shopping);
                    this.$store.commit('checkShoppingCartList');
                }
            },
            // 快速搜索
            quickSearch (e) {
                var quickSearchBtn = document.querySelector('.quick-search').querySelectorAll('button');
                var target = e.target;
                if (target.tagName === 'BUTTON') {
                    for (let i = 0; i < quickSearchBtn.length; i++) {
                        quickSearchBtn[i].className = '';
                    }
                    target.className = 'active';
                    if (target.textContent === '全部品类') {
                        this.shoppingList = this.allShoppingList;
                    } else if (target.textContent === '休闲零食') {
                        this.shoppingList = this.allShoppingList.filter(function (shopping) {
                            return shopping.category === '休闲零食';
                        });
                    } else if (target.textContent === '酒水饮料') {
                        this.shoppingList = this.allShoppingList.filter(function (shopping) {
                            return shopping.category === '酒水饮料';
                        });
                    } else if (target.textContent === '粮油副食') {
                        this.shoppingList = this.allShoppingList.filter(function (shopping) {
                            return shopping.category === '粮油副食';
                        });
                    } else if (target.textContent === '生鲜水果') {
                        this.shoppingList = this.allShoppingList.filter(function (shopping) {
                            return shopping.category === '生鲜水果';
                        });
                    } else if (target.textContent === '日常洗护') {
                        this.shoppingList = this.allShoppingList.filter(function (shopping) {
                            return shopping.category === '日常洗护';
                        });
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
    .shopping-list {
        width: 100%;
        margin: 31px auto;
        >div.search {
            height: 60px;
            width: 100%;
            background: white;
            position: fixed;
            top: 31px;
            left: 0px;
            z-index: 9;
            display: flex;
            justify-content: center;
            .search-input, .shopping-btn, .shopping-btn button {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .search-input {
                width: 600px;
                height: 100%;
                input {
                    height: 32px;
                    width: 500px;
                    padding-left: 40px;
                    border: 2px solid #333;
                    background: url("../assets/image/search.png") no-repeat left center;
                }
            }
            .shopping-btn {
                width: 300px;
                height: 100%;
                button {
                    width: 150px;
                    height: 38px;
                    border: 2px solid #333;
                    background: white;
                    span:nth-child(2) {
                        padding: 0 10px;
                    }
                    span:nth-child(3) {
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        border-radius: 50%;
                        background: #ff2e63;
                        color: white;
                    }
                    &:hover {
                        background: #ededee;
                    }
                }
            }
        }
        >div.quick-search-box {
            width: 100%;
            height: 30px;
            background: white;
            position: fixed;
            top: 91px;
            z-index: 9;
            box-shadow: 0px 2px 2px #ccc;
            >div.quick-search {
                height: 30px;
                padding-left: 253px;
                button.active {
                    background: #444;
                    color: white;
                }
                button {
                    margin-right: 10px;
                    padding: 2px;
                    background: white;
                    border: none;
                    font-size: 14px;
                    font-weight: bold;
                    &:hover {
                        background: #444;
                        color: white;
                    }
                }
            }
        }
        >div.shoppingList-screen {
            width: 100%;  
            margin-top: 130px;         
            display: flex;
            flex-wrap: wrap;
            >div {
                width: 200px;
                height: 250px;
                margin: 10px 0px 0px 20px;
                border: 1px solid #ccc;
                position: relative;
                cursor: pointer;
                box-shadow: 2px 2px 2px #ccc;
                &:hover {
                    >div:nth-child(3) {
                        opacity: 0.8;
                    }
                }
                img {
                    width: 100%;
                    height: 220px;
                }
                >div:nth-child(2) {
                    width: 100%;
                    position: absolute;
                    bottom: 0px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    background: rgba(255, 255, 255, 0.8);
                    p {
                        margin: 0;
                        overflow: hidden;
                    }
                    p:nth-child(1) {
                        color: black;
                        width: 190px;
                        height: 32px;
                        padding: 5px;
                        font-size: 14px;
                    }
                    p:nth-child(2) {
                        height: 30px;
                        color: #F33F00;
                        padding-left: 5px;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 30px;
                        span {
                            font: bold 20px;
                        }
                    }
                    p:nth-child(3) {
                        height: 30px;
                        color: #444;
                        padding-right: 5px;
                        font-size: 14px;
                        line-height: 32px;
                        span {
                            color: #F33F00;
                            font: bold 14px;
                        }
                    }
                }
                >div:nth-child(3) {
                    width: 200px;
                    height: 250px;
                    background: #fffdef url('../assets/image/plus.png') no-repeat center;
                    opacity: 0;
                    transition: all 0.5s ease;
                    position: absolute;
                    top: 0px;
                }
            }
        }
    }
</style>
