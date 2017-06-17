<template>
    <header>
        <div class="header-box">
            <div class="sign-box">
                <div v-if="landingStatus === 'not-landed'">
                    <span>未登陆!</span>
                    <a href="javascript:;" @click="changeSignInFlag">请登录</a>
                </div>
                <div v-else-if="landingStatus === 'has-logged'">
                    <span>您好</span>
                    <span>{{ this.$store.state.accountName }}</span>
                    <a href="javascript:;" @click="signOut">退出</a>
                    <a href="javascript:;" @click="changeSignInFlag">切换账号</a>
                </div>
                <transition name="sign-in-fade">
                    <form id="sign-in" v-if="signInFlag">
                        <span class="triangle-in"></span>
                        <span class="triangle-out"></span>
                        <div>
                            <label for="account">账号</label><input id="account" v-model="account" type="text" placeholder="请输入账号" />
                        </div>
                        <div>
                            <label for="password">密码</label><input id="password" type="password" placeholder="请输入密码" />
                        </div>
                        <div>
                            <button @click="signIn">登&nbsp;录</button>
                        </div>
                    </form>
                </transition>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/">在售商品</router-link>
                    </li>
                    <li>
                        <router-link to="/commodityOperations">商品操作</router-link>
                    </li>
                    <li>
                        <router-link to="/shoppingRecord">收银操作</router-link>
                    </li>
                    <li>
                        <router-link to="/messageNotification">消息通知<span v-if="messageNumberFlag">{{ messageListNumber }}</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

    import { mapState, mapGetters } from 'vuex'

    export default {
        data () {
            return {
                landingStatus: 'not-landed',
                signInFlag: false,
                account: '',
            }
        },
        computed: {
            ...mapState([
                'messageNumberFlag',
            ]),
            ...mapGetters([
                'messageListNumber'
            ]),
        },
        methods: {
            // 隐藏显示登录框
            changeSignInFlag () {
                this.signInFlag = !this.signInFlag;
            },
            // 登录
            signIn () {
                if (this.account !== '') {
                    this.$store.commit('setAccountName', this.account);
                    this.signInFlag = !this.signInFlag;
                    this.landingStatus = 'has-logged';
                    this.account = '';
                    this.$store.commit('checkShopping');
                    this.$store.commit('checkMessageList');
                }
            },
            // 退出登录
            signOut () {
                this.landingStatus = 'not-landed';
            }
        }
    }
</script>

<style lang="scss">
    header {
        width: 100%;
        height: 30px;
        background: #f2f2f2;
        font-size: 12px;
        border-bottom: 1px solid #ededee;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 99;
        >div.header-box {
            width: 1100px;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            >div.sign-box {
                line-height: 30px;
                color: #999;
                a {
                    color: #999;
                    margin-left: 10px;
                    &:hover {
                        color: #E31436;
                    }
                }
                .sign-in-fade-enter-active, .sign-in-fade-leave-active {
                    transition: opacity 0.6s ease;
                }
                .sign-in-fade-enter, .sign-in-fade-leave-active {
                    opacity: 0;
                }
                #sign-in {
                    border: 1px solid #ededee;
                    padding: 20px 20px;
                    position: absolute;
                    top: 40px;
                    z-index: 99;
                    background: white;
                    >span {
                        width: 0px;
                        height: 0px;
                        font-size: 0px;
                        overflow: hidden;
                    }
                    >span.triangle-in {
                        border-width: 10px 10px;
                        border-style: solid; 
                        border-color: transparent transparent #ededee transparent;
                        position: absolute;
                        top: -20px;
                        left: 60px;
                    }
                    >span.triangle-out {
                        border-width: 10px 10px; 
                        border-style: solid; 
                        border-color: transparent transparent white transparent;
                        position: absolute;
                        top: -18px;
                        left: 60px; 
                    }
                    >div {
                        padding: 10px 0;
                        label, input {
                            display: inline-block;
                        }
                        label {
                            width: 50px;
                            text-align: center;
                        }
                        input {
                            width: 150px;
                            padding: 5px 10px;
                            border: 1px solid #ededee;
                        }
                        button {
                            width: 60px;
                            height: 30px;
                            background: white;
                            border: 1px solid #ededee;
                            border-radius: 5px;
                            &:hover {
                                background: #2F79BA;
                                color: white;
                            }
                        }
                    }
                    >div:nth-child(5) {
                        text-align: right;
                    }
                }
            }
            >div.nav {
                height: 30px;
                ul{
                    margin: 0;
                    display: flex;
                    li {
                        width: 80px;
                        height: 30px;
                        position: relative;
                        a {
                            display: block;
                            width: 80px;
                            height: 100%;
                            margin: auto;
                            color: #999;
                            text-align: center;
                            line-height: 30px;
                            &:hover {
                                color: #E31436;
                            }
                            span {
                                display: inline-block;
                                margin-left: 5px;
                                width: 20px;
                                height: 20px;
                                text-align: center;
                                line-height: 20px;
                                border-radius: 50%;
                                background: #ff2e63;
                                color: white;
                            }
                        }
                    }
                }  
            }
        }
    }
</style>
