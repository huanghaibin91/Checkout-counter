<template>
    <div class="shopping-cart">
        <p>购物车</p>
        {{this.$store.state.shoppingFlag}}, {{this.$store.state.shoppingNumber}}
        <table cellspacing="0">
            <thead>
                <tr>
                    <td><input v-model="checkAll" id="check-all"  type="checkbox" /><label for="check-all">&nbsp;全选</label></td>
                    <td>名称</td>
                    <td>数量</td>
                    <td>金额</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <shoppingCartList v-for="(shopping, index) in shoppingCartList" :getShopping="shopping" :getIndex='index' :key="shopping.coding"></shoppingCartList>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">已选商品<span>{{ shoppingNumberTotal }}</span>件</td>
                    <td>合计: ￥<span>{{ 0 }}</span></td>
                    <td><button>结&nbsp;&nbsp;&nbsp;算</button></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

    import shoppingCartList from './shoppingCartList.vue'
    import { mapState, mapGetters } from 'vuex'

    export default {
        name: 'shoppingCart',
        components: {
            shoppingCartList,
        },
        data () {
            return {
                checkAll: true,
                shoppingNumberTotal: 0,
            }
        },
        watch: {
            // 监听全选按钮
            checkAll: function (val) {
                if (val === true) {
                    this.$store.commit("checkAllShopping");
                } else {
                    this.$store.commit("uncheckAllShopping");
                }
            },
            // 监听购物车中每种商品的数量
            shoppingNumber: function (val) {
                console.log('hello');
                for (let i = 0; i < shoppingCartList.length; i++) {
                    if (shoppingFlag[i] === true) {
                        this.shoppingNumberTotal += state.shoppingNumber[i];
                    }
                }
            },
            hello: function () {
                console.log('hello');
            },
        },
        computed: {
            ...mapState([
                'shoppingCartList',
                'shoppingFlag',
                'shoppingNumber',
            ]),
            ...mapGetters([
                // 'shoppingNumberTotal',
                // 'shoppingPriceTotal'
                'hello',
            ]),
        },
        methods: {
            
        },
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
