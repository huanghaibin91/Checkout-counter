<template>
    <transition name="storage-fade">
        <div class="storage" v-if="getStorageFlag">
            <div class="storage-title">
                <div>
                    <span>商品入库单</span>
                    <button title="商品入库细则" @click="changeRuleFlag"></button>
                    <transition name="fade">
                        <p v-if="storageRuleFlag">
                            <span>商品入库细则：</span><br />
                            <span>1.如果是新商品，请详细填报所有信息。</span><br />
                            <span>2.商品名称可以相同，但商品编码唯一。</span><br />
                            <span>3.当同一商品再次进货入库，可以进行便捷入库操作。</span><br />
                            <span>4.便捷入库，输入商品条码，显示可以进行便捷入库后，填写数量和保质期，其他选项可以省略，商品将会作为已有商品的新批次入库。</span><br />
                            <span>5.入库商品的图片要将图片名称改为：商品编码.jpg，格式，然后放到项目文件夹里边的：src/assets/shopping-images文件夹里，图片就可以显示。</span>
                        </p>
                    </transition>
                </div>
                <a @click="changeStorageFlag">返回商品列表</a>
            </div>
            <form class="storage-input">
                <div>
                    <label for="shopping-coding">商品编码</label>
                    <div>
                        <input id="shopping-coding" v-model="coding" @blur="checkCoding" placeholder="请输入商品编码" />
                        <span v-if="codingFlag === ''"></span>
                        <span v-else-if="codingFlag === 'error'" class="error">商品编码为纯数字，不含字母或符号</span>
                        <span v-else-if="codingFlag === 'correct'" class="correct">商品编码输入格式正确</span>
                        <span v-else="codingFlag === 'exists'" class="correct">商品编码已存在，可以按便捷入库操作</span>
                    </div>
                </div>
                <div>
                    <label for="shopping-name">商品名称</label>
                    <div>
                        <input id="shopping-name" v-model="name" @blur="checkName" placeholder="请输入商品名称" />
                        <span v-if="nameFlag === ''"></span>
                        <span v-else="nameFlag === 'exists'" class="correct">商品名称已存在，可以尝试更改商品名称</span>
                    </div>
                </div>
                <div>
                    <label for="shopping-number">商品数量</label>
                    <div>
                        <input id="shopping-number" v-model="number" placeholder="请输入商品数量" />
                        <span v-if="numberFlag === ''"></span>
                        <span v-else-if="numberFlag === 'error'" class="error">商品数量错误，应是大于0的整数</span>
                        <span v-else="numberFlag === 'correct'" class="correct">输入数量格式正确</span>
                    </div>
                </div>
                <div>
                    <label for="shopping-price">商品价格</label>
                    <div>
                        <input id="shopping-price" v-model="price" placeholder="请输入商品价格" />
                        <span v-if="priceFlag === ''"></span>
                        <span v-else-if="priceFlag === 'error'" class="error">商品价格输入错误，应是大于0且最多一位小数的数字</span>
                        <span v-else="priceFlag === 'correct'" class="correct">输入价格格式正确</span>
                    </div>
                </div>
                <div>
                    <label for="shopping-category">商品品类</label>
                    <div>
                        <select id="shopping-category" v-model="category">
                            <option value="休闲零食">休闲零食</option>
                            <option value="酒水饮料">酒水饮料</option>
                            <option value="粮油副食">粮油副食</option>
                            <option value="生鲜水果">生鲜水果</option>
                            <option value="日常洗护">日常洗护</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="shopping-date">商品保质期</label>
                    <div>
                        <calendar @getdate="setdate"></calendar>
                    </div>
                </div>
                <div class="storage-submit"><button type="submit" @click="addShopping">确认提交</button></div>
            </form>
        </div>
    </transition>
</template>

<script>
    import calendar from '../calendar.vue'

    export default {
        name: 'storage',
        components: {
            calendar,
        },
        props: ['getStorageFlag'],
        data () {
            return {
                // 表单输入的各项值
                name: '',
                coding: '',
                price: '',
                number: '',
                category: '休闲零食',
                date: '',
                // 商品列表
                shoppingList: this.$store.state.shoppingList,
                // 显示隐藏判定
                storageRuleFlag: false,
                nameFlag: '',
                codingFlag: '',
                priceFlag: '',
                numberFlag: '',
            }
        },
        methods: {
            // 向父组件传递
            changeStorageFlag () {
                this.$emit('emitStorageFlag')
            },
            // 入库规则弹出隐藏
            changeRuleFlag () {
                this.storageRuleFlag = !this.storageRuleFlag;
            },
            // 检查商品名称
            checkName () {
                for (let i = 0; i < this.shoppingList.length; i++) {
                    if (this.shoppingList[i].name === this.name) {
                        return this.nameFlag = 'exists';
                    }
                }
            },
            // 检查商品编码
            checkCoding () {
                for (let i = 0; i < this.shoppingList.length; i++) {
                    if (this.shoppingList[i].coding === this.coding) {
                        return this.codingFlag = 'exists';
                    }
                }
            },
            // 从子组件calendar获取数据
            setdate (arg) {
                this.date = arg;
            },
            // 添加商品入库
            addShopping () {
                if (this.codingFlag === 'exists') {
                    for (let i = 0; i < this.shoppingList.length; i++) {
                        if (this.shoppingList[i].coding === this.coding) {
                            // 新批次
                            let newBatch = new Object();
                            newBatch.number = this.number;
                            newBatch.date = this.date;
                            // 将新批次作为参数传递到原有商品上
                            let obj = new Object();
                            obj.index = i;
                            obj.batch = newBatch;
                            this.$store.commit('addShoppingBatch', obj)
                        }
                    }
                } else {
                    let newShopping = new Object();
                    newShopping.name = this.name;
                    newShopping.coding = this.coding;
                    newShopping.price = this.price;
                    newShopping.category = this.category;
                    newShopping.number = this.number;
                    newShopping.date = this.date;
                    this.$store.commit('addShopping', newShopping);
                }
                this.name = '';
                this.coding = '';
                this.price = '';
                this.number = '';
                this.category = '休闲零食';
                this.date = '';
            },
        }, 
        watch: {
            name: function (val) {
                if (val === '') {
                    this.nameFlag = '';
                }
            },
            coding: function (val) {
                let reg = /^[0-9]\d*$/g;
                if (val === '') {
                    this.codingFlag = '';
                } else {
                    if (reg.test(val)) {
                        this.codingFlag = 'correct';
                    } else {
                        this.codingFlag = 'error';
                    }
                }
                
            },
            price: function (val) {
                let reg = /^(\d+\.\d{1,1}|\d+)$/g;
                if (val === '') {
                    this.priceFlag = '';
                } else {
                    if (reg.test(val)) {
                        this.priceFlag = 'correct';
                    } else {
                        this.priceFlag = 'error';
                    }
                }
            },
            number: function (val) {
                let reg = /^[1-9]\d*$/g;
                if (val === '') {
                    this.numberFlag = '';
                } else {
                    if (reg.test(val)) {
                        this.numberFlag = 'correct';
                    } else {
                        this.numberFlag = 'error';
                    }
                }
            }, 
        }
    }
</script>

<style lang="scss">
    .storage-fade-enter-active, .storage-fade-leave-active {
            transition: all 0.5s ease;
        }
    .storage-fade-enter, .storage-fade-leave-active {
        transform: translateX(-10px);
        opacity: 0.5;
    }
    .storage {
        width: 700px;
        margin: 31px auto;
        padding: 10px 20px;
        background: white;
        border: 1px solid #ededee;
        border-radius: 10px;
        box-shadow: 0px 2px 2px #ccc;
        position: absolute;
        top: 50px;
        left: 0px;
        right: 0px;
        >div.storage-title {
            height: 30px;
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 18px;
            font-weight: bold;
            line-height: 30px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                display: flex;
                align-items: center;
                >button {
                    width: 24px;
                    height: 24px;
                    margin-left: 10px;
                    text-align: center;
                    border: none;
                    border-radius: 50%;
                    background: url('../../assets/image/question-mark.png') no-repeat center;
                    background-size: cover;
                }
                .fade-enter-active, .fade-leave-active {
                    transition: all 0.5s ease;
                }
                .fade-enter, .fade-leave-active {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                p {
                    position: absolute;
                    top: 30px;
                    left: 0px;
                    width: 250px;
                    padding: 10px;
                    font-size: 14px;
                    font-weight: normal;
                    text-align: left;
                    border: 1px solid #A8A8A8;
                    box-shadow: 2px 2px 2px #ccc;
                    background: white;
                    span:nth-child(1) {
                        font-weight: bold;
                    }
                }
            }
            a {
                font-size: 14px;
                color: #999;
                display: block;
                height: 32px;
                line-height: 32px;
                padding-left: 15px;
                background: url('../../assets/image/return.png') no-repeat left center;
            }
        }
        form.storage-input {
            width: 500px;
            margin: auto;
            padding: 20px 50px;
            margin-bottom: 150px;
            >div {
                display: flex;
                margin: 40px 0px;
                label {
                    width: 150px;
                    text-align: right;
                    margin-right: 30px;
                    line-height: 32px;
                    font-weight: bold;
                }
                >div {
                    width: 350px;
                    label, input, span, select {
                        display: block;
                    }
                    >input {
                        width: 200px;
                        padding: 5px 10px;
                        border: 1px solid #A9A9A9;
                    }
                    >span {
                        font-size: 14px;
                        margin-top: 10px;
                        position: absolute;
                    }
                    >span.error {
                        color: #DF000C;
                    }
                    >span.correct {
                        color: #60BB46;
                    }
                    select {
                        margin-top: 2px;
                        padding: 3px;
                    }
                    >div {
                        margin: 0;
                        padding: 0;
                    }
                }
            }
            div.storage-submit {
                justify-content: center;
                button {
                    width: 80px;
                    height: 30px;
                    color: white;
                    background: #52616b;
                    border-radius: 3px;
                    border: none;
                    &:hover {
                        background: #2F79BA;
                        color: white;
                    }
                }
            }
        }
    }
</style>
