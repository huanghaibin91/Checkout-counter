<template>
    <div class="shopping-list">
        <div class="quick-search">
            <button>全部品类</button>
            <button>休闲零食</button>
            <button>酒水饮料</button>
            <button>粮油副食</button>
            <button>生鲜水果</button>
            <button>日常洗护</button>
        </div>
        <div class="shoppingList-screen">
            <div v-for="shopping in shoppingList">
                <img :src="imgUrl(shopping)" />
                <div>
                    <p>{{ shopping.name }}</p>
                    <p>￥<span>{{ shopping.price }}</span></p>
                    <p>库存<span>&nbsp;{{ shopping.number }}&nbsp;</span>件</p>
                </div>
                <div>
                    <button @click="addShoppingCart(shopping)">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:　'shoppingList',
        data () {
            return {
                me: 'hello',
                shoppingList: this.$store.state.shoppingList,
            }
        },
        methods: {
            // 商品图片
            imgUrl (shopping) {
                // webpack中一切皆模块，都可以用require引入
                return require('../assets/shopping-images/' + shopping.coding + '.jpg');
            },
            // 添加商品至购物车列表
            addShoppingCart (shopping) {
                this.$store.commit('addShoppingCart', shopping);
            },
        }
    }
</script>

<style lang="scss">
    .shopping-list {
        width: 896px;
        >div.quick-search {
            width: 100%;
            height: 30px;
            padding: 10px 20px 0px 20px;
            button {
                margin-right: 10px;
                background: white;
                border: 1px solid #333;
                font-size: 14px;
                font-weight: bold;
                &:hover {
                    background: #444;
                    color: white;
                }
            }
        }
        >div.shoppingList-screen {
            width: 100%;            
            display: flex;
            flex-wrap: wrap;
            >div {
                width: 200px;
                height: 220px;
                margin: 10px 0px 0px 20px;
                border: 1px solid #ccc;
                position: relative;
                &:hover {
                    >div:nth-child(3) {
                        opacity: 0.82;
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
                        color: #333;
                        width: 190px;
                        padding: 5px;
                        font-size: 14px;
                        font-weight: bold;
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
                    height: 220px;
                    background: #ccc;
                    opacity: 0;
                    transition: all 1 ease;
                    position: absolute;
                    top: 0px;
                    button {
                        width: 100px;
                        height: 50px;
                        background: white;
                        opacity: 0.82;
                        border: 1px solid #E11935;
                        position: relative;
                        top: 85px;
                        left: 50px;
                        color: #E11935;
                        font-size: 16px;
                        font-weight: bold;
                        &:hover {
                            color: white;
                            background: #E11935;
                        }
                    }
                }
            }
        }
    }
</style>
