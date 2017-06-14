<template>
    <div class="shopping-cart">
        <div class="shopping-cart-title">
            <p>购物车</p>
            <router-link to="/">返回商品列表</router-link>
        </div>
        <table cellspacing="0">
            <thead>
                <tr>
                    <td><input v-model="checkAllFlag" @click="changeCheckAll" id="check-all"  type="checkbox" /><label for="check-all">&nbsp;全选</label></td>
                    <td>名称</td>
                    <td>数量</td>
                    <td>单价</td>
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
                    <td colspan="2">合计: ￥<span>{{ shoppingPriceTotal }}</span></td>
                    <td><button @click="changeCheckOutFlag">结&nbsp;&nbsp;&nbsp;算</button></td>
                </tr>
            </tfoot>
        </table>
        <transition name="check-out-fade">
            <div v-if="checkOutFlag" class="check-out">
                <div class="check-out-title">
                    <p>商品结算</p>
                    <a @click="changeCheckOutFlag">返回购物车</a>
                </div>
                <ul>
                    <li>
                        <button @click="changeCashCheckOutFlag">现金支付</button>
                        <transition name="cash-fade">
                            <div v-if="cashCheckOutFlag">
                                <label><span>实收</span><input type="text" @click="selected" v-model="cash"  placeholder="输入实收金额"></label>
                                <p><span>应收</span><span>{{ shoppingPriceTotal }}</span></p>
                                <p><span>找零</span><span>{{ smallChange }}</span></p>
                                <button @click="cashCheckOut">确认支付</button>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <button>支付宝支付</button>
                    </li>
                    <li>
                        <button>微信支付</button>
                    </li>
                    <li>
                        <button>刷卡</button>
                    </li> 
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>

    import shoppingCartList from './shoppingCartList.vue'
    
    import { mapState, mapGetters } from 'vuex'

    export default {
        name: 'shoppingCart',
        data () {
            return {
                cashCheckOutFlag: false,
                cash: '',
            }
        },
        components: {
            shoppingCartList,
        },
        computed: {
            ...mapState([
               'shoppingCartList',
               'checkAllFlag',
               'checkOutFlag',
            ]),
            ...mapGetters([
                'shoppingNumberTotal',
                'shoppingPriceTotal',
            ]),
            smallChange () {
                return this.cash - this.shoppingPriceTotal;
            },
        },
        methods: {
            // 改变全选状态
            changeCheckAll () {
                this.$store.commit("changeCheckAll");
                if (this.checkAllFlag === true) {
                    this.$store.commit("checkAllShopping");
                } else {
                    this.$store.commit("uncheckAllShopping");
                }
            },
            // 弹出结算界面
            changeCheckOutFlag () {
                this.$store.commit('changeCheckOutFlag');
            },
            // 现金结算详情页面
            changeCashCheckOutFlag () {
                this.cashCheckOutFlag = !this.cashCheckOutFlag;
            },
            // 获取input里的文字
            selected (e) {
                e.target.select();
            },
            // 现金支付
            cashCheckOut () {
                this.$store.commit('cashCheckOut');
            }
        },
    }
</script>

<style lang="scss">
    .shopping-cart {
        width: 1000px;
        margin: 31px auto;
        padding: 10px 20px;
        >div.shopping-cart-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
                border-left: 5px solid aqua;
                text-indent: 1em;
                font-size: 20px;
                font-weight: bold;
            }
            a {
                font-size: 14px;
                color: #999;
                display: block;
                height: 32px;
                line-height: 32px;
                padding-left: 32px;
                background: url('../../assets/image/return.png') no-repeat left center;
            }
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
                width: 10%;
            }
            th:nth-child(5), td:nth-child(5) {
                width: 10%;
            }
            th:nth-child(6), td:nth-child(6) {
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
        .check-out-fade-enter-active, .check-out-fade-leave-active {
            transition: all 0.5s ease;
        }
        .check-out-fade-enter, .check-out-fade-leave-active {
            transform: translateX(-10px);
            opacity: 0.5;
        }
        >div.check-out {
            width: 500px;
            margin: 30px auto;
            padding: 10px;
            background: white;
            border: 1px solid #ededee;
            border-radius: 10px;
            box-shadow: 0px 2px 2px #ccc;
            position: fixed;
            top: 30px;
            left: 0px;
            right: 0px;
            z-index: 9;
            >div.check-out-title {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                    border-left: 5px solid aqua;
                    text-indent: 1em;
                    font-size: 20px;
                    font-weight: bold;
                }
                a {
                    font-size: 14px;
                    color: #999;
                    display: block;
                    height: 32px;
                    line-height: 32px;
                    padding-left: 32px;
                    background: url('../../assets/image/return.png') no-repeat left center;
                }
            }
            ul {
                margin: 0;
                padding: 0;
                li {
                    margin: 20px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    button {
                        display: block;
                        height: 30px;
                        background: white;
                        width: 350px;
                        border: 1px solid #ededee;
                        border-radius: 5px;
                    }
                    .cash-fade-enter-active, .cash-fade-leave-active {
                        transition: all 0.5s ease;
                    }
                    .cash-fade-enter, .cash-fade-leave-active {
                        transform: translateX(-10px);
                        opacity: 0.5;
                    }
                    div {
                        text-align: center;
                        label, p {
                            display: block;
                            width: 400px;
                            height: 50px;
                            margin: 10px auto;
                            font-size: 16px;
                            font-weight: bold;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            span {
                                display: inline-block;
                                height: 50px;
                                width: 110px;
                                line-height: 50px;
                                text-align: center;
                            }
                            span:nth-child(2) {
                                color: #E11935;
                            }
                        }
                        input {
                            width: 100px;
                            height: 40px;
                            border: none;
                            border-bottom: 1px solid #eee;
                            padding: 5px;
                            text-align: center;
                        }
                        button {
                            width: 100px;
                            display: inline-block;
                            &:hover {
                                background: #2F79BA;
                                color: white;
                            }
                        }
                    }
                }
            } 
        }
    }
</style>
