<template>
    <div class="message-notification">
        <div class="message-notification-title">
            <p>消息通知</p>
            <div>
                <button title="消息通知设置" @click="changeSetFlag"></button>
                <transition name="set-fade">
                    <form v-if="setFlag">
                        <label for="setDate">保质期提醒时限</label>
                        <div>
                            <input id="setDate" v-model="setDate" placeholder="设置距离保质期间隔" />
                            <button @click="setDateLimit">确定</button>
                        </div>
                        <label for="setNumber">库存提醒数量</label>
                        <div>
                            <input id="setNumber" v-model="setNumber" placeholder="设置距离库存差额" />
                            <button @click="setNumberLimit">确定</button>
                        </div>
                    </form>
                </transition>
            </div>
        </div>
        <p v-if="messageFlag === 'noMessage'">没有消息通知！</p>
        <div v-else-if="messageFlag === 'hasMessage'" class="message-list" v-for="message in messageList">
            <p v-if="message.name === 'date'">商品编码{{ message.shopping.coding }}，{{ message.shopping.name }}保质期至<span>{{ message.shopping.date }}</span>，还剩<span>{{ message.date }}</span>天,请尽快销售！</p>
            <p v-else-if="message.name === 'number'">商品编码{{ message.shopping.coding }}，{{ message.shopping.name }}库存仅剩<span>{{ message.shopping.number}}</span>份，请尽快补充！</p>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        name: 'messageNotification',
        data () {
            return {
                messageFlag: 'hasMessage',
                setFlag: false,
                setDate: '',
                setNumber: '',
            }
        },
        computed: {
            ...mapState([
                'messageList',
            ]),
        },
        methods: {
            // 显示隐藏设置表单
            changeSetFlag () {
                this.setFlag = !this.setFlag;
            },
            // 设置保质期时限
            setDateLimit () {
                let date = parseInt(this.setDate);
                if (typeof date === 'number') {
                    this.$store.commit('setDate', date);
                    this.changeSetFlag();
                }
            },
            // 设置库存限额
            setNumberLimit () {
                let number = parseInt(this.setNumber);
                if (typeof number === 'number') {
                    this.$store.commit('setNumber', number);
                    this.changeSetFlag();
                }
            }
        }
    }
</script>

<style lang="scss">
    .message-notification {
        width: 1000px;
        margin: 50px auto;
        div.message-notification-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ededee;
            >p {
                border-left: 5px solid aqua;
                text-indent: 1em;
                font-size: 20px;
                font-weight: bold;
            }
            >div {
                position: relative;
                >button {
                    background: white url('../assets/image/gear.png') no-repeat center;
                    border: none;
                    width: 32px;
                    height: 50px;
                }
                .set-fade-enter-active, .set-fade-leave-active {
                    transition: all 0.5s ease;
                }
                .set-fade-enter, .set-fade-leave-active {
                    transform: translateX(-10px);
                    opacity: 0.5;
                }
                form {
                    font-size: 14px;
                    width: 260px;
                    padding: 20px;
                    position: absolute;
                    left: -130px;
                    background: white;
                    border: 1px solid #ededee;
                    border-radius: 10px;
                    box-shadow: 0px 2px 2px #ccc;
                    label, div {
                        padding: 10px;
                    }
                    label {
                        display: block;
                        width: 100%;
                    }
                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        input {
                            padding: 5px 10px;
                            border: 1px solid #ededee;
                        }
                        button {
                            border: 1px solid #ededee;
                            border-radius: 5px;
                            background: white;
                            padding: 5px;
                            &:hover {
                                background: #2F79BA;
                                color: white;
                            }
                        }
                    }
                }
            }
            
        }
        p {
            text-align: center;
        }
        div.message-list {
            font-size: 14px;
            color: #333;
            margin: 20px;
            padding: 5px 35px;
            border-radius: 5px;
            background: #eaffd0 url('../assets/image/list.png') no-repeat 5px center;
            span {
                padding: 0px 5px;
                font-weight: bold;
                color: #DE2634;
            }
        }
    }
</style>
