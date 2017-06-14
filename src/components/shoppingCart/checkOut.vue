<template>
    <transition name="check-out-fade">
        <div v-if="checkOutFlag" class="check-out">
            <div class="check-out-title">
                <p>商品结算</p>
                <a>返回购物车</a>
            </div>
            <ul>
                <li>
                    <button>现金支付</button>
                    <div>
                        <label><span>实收</span><input @click="selected" type="text" placeholder="输入实收金额"></label>
                        <p><span>应收</span><span></span></p>
                        <p><span>找零</span><span></span></p>
                        <button>确认支付</button>
                    </div>
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
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        name: 'checkOut',
        // data () {
            
        // },
        computed: {
            ...mapState([
                'checkOutFlag',
            ]),
        },
    }
</script>

<style lang="scss">
    .check-out-fade-enter-active, .check-out-fade-leave-active {
        transition: all 1s ease;
    }
    .check-out-fade-enter, .check-out-fade-leave-active {
        transform: translateX(-10px);
        opacity: 0
    }
    .check-out {
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
</style>
