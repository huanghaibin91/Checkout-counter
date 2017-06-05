<template>
    <div class="sign-box">
        <div class="sign-out">
            <button>切换账户</button>
            <button>退出</button>
        </div>
        <div class="head">
            <img src="../assets/image/head.png" /><span>小张</span>
        </div>
        <form id="sign-in">
            <div>
                <label for="account">账号</label><input id="account" type="text" placeholder="请输入账号" />
            </div>
            <div>
                <label for="password">密码</label><input id="password" type="password" placeholder="请输入密码" />
            </div>
            <div>
                <button>登录</button>
            </div>
        </form>
    </div>  
</template>

<script>
    export default {
        name: 'signIn',
        
    }
</script>

<style lang="scss">
    .sign-box {
        width: 300px;
        height: 60px;
        position: relative;
        &:hover {
            .sign-out {
                transform: translateY(60px);
            }
            #sign-in {
                transform: translateY(184px);
            }
        }
        .sign-out {
            width: 300px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            position: absolute;
            top: -60px;
            transition: all 1s ease;
            background: rgba(208, 208, 208, 0.8);
            z-index: 9;
            button {
                width: 80px;
                height: 38px;
                background: white;
                border: 1px solid #ccc;
                &:hover {
                    background: #52616b;
                    color: white;
                }
            }
            button:nth-child(1) {
                margin-right: 20px;
            }
        }
        .head {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            position: relative;
            z-index: 6;
            img {
                padding-right: 20px;
            }
            span {
                font: bold 18px;
            }
        }
        #sign-in {
            border: 2px solid #333;
            padding: 20px 20px;
            transition: all 1s ease;
            position: absolute;
            top: -126px;
            z-index: 3;
            background: white;
            >div {
                padding: 10px 0;
                label, input {
                    display: inline-block;
                }
                label {
                    width: 60px;
                    text-align: center;
                }
                input {
                    width: 174px;
                    padding: 3px 10px;
                    border: 1px solid #333;
                }
                button {
                    width: 60px;
                    height: 30px;
                    background: white;
                    border: 1px solid #333;
                    &:hover {
                        background: #52616b;
                        color: white;
                    }
                }
            }
            >div:nth-child(3) {
                text-align: right;
            }
        }
    }
</style>
