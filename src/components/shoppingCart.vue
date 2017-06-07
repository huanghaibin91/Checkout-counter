<template>
    <div class="shopping-cart">
        <p>购物车</p>
        <table cellspacing="0">
            <thead>
                <tr>
                    <td><input id="check-all" type="checkbox" /><label for="check-all">&nbsp;全选</label></td>
                    <td>名称</td>
                    <td>数量</td>
                    <td>金额</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <!--<tr v-for="shopping in shoppingCartList">
                    <td><input type="checkbox" /></td>
                    <td><img :src="imgUrl(shopping)" /><span>{{ shopping.name }}</span></td>
                    <td><button @click="reduceShoppingNum">-</button><input v-model="shoppingNum" /><button @click="addShoppingNum(shopping)">+</button></td>
                    <td>￥ <span>{{ shopping.price }}</span></td>
                    <td><button>删除</button></td>
                </tr>-->
                <shoppingCartList v-for="(shopping, index) in shoppingCartList" :getShopping="shopping" :getIndex='index' :key="shopping.coding"></shoppingCartList>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">已选商品<span>0</span>件</td>
                    <td>合计: ￥<span>12220</span></td>
                    <td><button>结&nbsp;&nbsp;&nbsp;算</button></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

    import shoppingCartList from './shoppingCartList.vue'

    export default {
        name: 'shoppingCart',
        components: {
            shoppingCartList,
        },
        data () {
            return {
                shoppingCartList: this.$store.state.shoppingCartList,
            }
        },
        methods: {
            // // 商品图片
            // imgUrl (shopping) {
            //     // webpack中一切皆模块，都可以用require引入
            //     return require('../assets/shopping-images/' + shopping.coding + '.jpg');
            // },
            // // 商品数量加一
            // addShoppingNum (shopping) {
            //     // if (this.shoppingNum < shopping.number) {
            //         // return this.shoppingNum++;
            //         this.shoppingNum++;
            //     // }
            // },
            // // 商品数量减一
            // reduceShoppingNum () {
            //     if (this.shoppingNum > 1) {
            //         return this.shoppingNum--;
            //     }
            // }
        }
    }
</script>

<style lang="scss">
    .shopping-cart {
        width: 896px;
        padding: 10px 20px;
        p {
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 20px;
            font-weight: bold;
        }
        table {
            width: 100%;
            th, td {
                text-align: center;
            }
            th:nth-child(1), td:nth-child(1) {
                width: 10%;
            }
            th:nth-child(2), td:nth-child2() {
                width: 40%;
            }
            th:nth-child(3), td:nth-child(3) {
                width: 20%;
            }
            th:nth-child(4), td:nth-child(4) {
                width: 20%;
            }
            th:nth-child(5), td:nth-child(5) {
                width: 10%;
            }
            tr {
                width: 100%;
                height: 60px;
            }
            thead tr {
                width: 100%;
                height: 40px;
                font-size: 16px;
                font-weight: bold;
                background: #F8F8F8;
                th {
                    border-bottom: 1px solid #EAEAEA;
                }
            }
            tfoot tr {
                height: 60px;
                background: #F8F8F8;
                td:nth-child(1) {
                    text-align: right;
                    padding: 0px 50px;
                    border: 1px solid #EAEAEA;
                    border-right: none;
                    span {
                        padding: 0 10px;
                        font: bold 18px;
                        color: #E11935;
                    }
                }
                td:nth-child(2) {
                    border-top: 1px solid #EAEAEA;
                    border-bottom: 1px solid #EAEAEA;
                    span {
                        font: bold 20px;
                        color: #E11935;
                    }
                }
                td:nth-child(3) {
                    border: 1px solid #EAEAEA;
                    border-left: none;
                    button {
                        border: none;
                        width: 80px;
                        height: 40px;
                        text-align: center;
                        background: #E11935;
                        color: white;
                    }
                }
            }
        }
    }
</style>
