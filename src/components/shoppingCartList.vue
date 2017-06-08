<template>
    <tr class="shoppingCartList" :style="changeColor">
        <td>
            <input v-model="shoppingFlag" @click="changeShoppingFlag(getIndex)" type="checkbox" />
        </td>
        <td>
            <img :src="imgUrl(getShopping)" />
            <span>{{ getShopping.name }}</span>
        </td>
        <td>
            <button @click="reduceShoppingNum">-</button>
            <input @click="selected" @keyup="inputNum(getShopping)" v-model="shoppingNum" />
            <button @click="addShoppingNum(getShopping)">+</button>
        </td>
        <td>
            ￥&nbsp;<span>{{ shoppingPrice(getShopping) }}</span>
        </td>
        <td>
            <button @click="deleteShopping(getIndex)">删&nbsp;除</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'shoppingCartList',
        data () {
            return {
                shoppingNum: 1,
                // shoppingCartListFlag: true,
            }
        },
        props: ['getShopping', 'getIndex',],
        computed: {
            // 选中后改变背景色
            changeColor () {
                if (this.chooseShopping === true) {
                    return {
                        background: '#FFFBF0'
                    }
                }
            },
            // store中的shoppingFlag
            shoppingFlag () {
                return this.$store.state.shoppingFlag[this.getIndex];
            },
        },
        watch: {
            // 监听商品数量变化
            shoppingNum: function (val) {
                let obj = new Object();
                obj.index = this.getIndex;
                obj.num = val;
                this.$store.commit('changeShoppingNumber', obj);
            }, 
        },
        methods: {
            // 商品图片
            imgUrl (shopping) {
                // webpack中一切皆模块，都可以用require引入
                return require('../assets/shopping-images/' + shopping.coding + '.jpg');
            },
            // 更改商品选中状态
            changeShoppingFlag (index) {
                this.$store.commit('changeShoppingFlag', index);
                console.log(this.$store.state.shoppingFlag);
            },
            // 直接输入数量
            inputNum (shopping) {
                let reg1 = /^[1-9]\d*$/g;
                let reg2 = /\D/g;
                if (!reg1.test(this.shoppingNum)) {
                    this.shoppingNum = this.shoppingNum.replace(reg2, '');
                }
                if (this.shoppingNum < 1) {
                    return this.shoppingNum = 1;
                } else if (this.shoppingNum > shopping.number) {
                    return this.shoppingNum = shopping.number;
                }
            },
            // 商品数量加一
            addShoppingNum (shopping) {
                if (this.shoppingNum < shopping.number) {
                    return this.shoppingNum++;
                }
            },
            // 商品数量减一
            reduceShoppingNum () {
                if (this.shoppingNum > 1) {
                    return this.shoppingNum--;
                }
            },
            // 商品价格
            shoppingPrice (shopping) {
                return (shopping.price * this.shoppingNum).toFixed(1);
            },
            // 删除商品
            deleteShopping (index) {
                this.$store.commit('deleteShoppingCart', index);
            },
            // 获取input里的文字
            selected (e) {
                e.target.select();
            },
        },
    }
</script>

<style lang="scss">
    tr.shoppingCartList {
        td {
            padding: 10px 0px;
        }
        td:nth-child(2) {
            text-align: left;
            img {
                width: 80px;
                height: 60px;
                float: left;
                vertical-align: middle;
                padding-right: 20px;
            }
            span {
                margin-top: 10px;
                font-size : 14px;
                color: #333;
            }
        }
        td:nth-child(3) {
            button, input {
                display: inline-block;
                height: 30px;
                border: none;
                padding: 0;
                font-size: 14px;
                text-align: center;
            }
            button {
                width: 40px;
                background: white;
                border: 1px solid #EAEAEA;
                font-size: 24px;
                font-weight: bold;
            }
            input {
                width: 50px;
                background: white;;
                color: #E11935;
                position: relative;
                top: -4px;
                &:focus {
                    background: #eee;
                }
            }
        }
        td:nth-child(4) {
            font-size: 16px;
            color: #E11935;
            span {
                font-size: 18px;
            }
        }
        td:nth-child(5) {
            button {
                background: white;
                border: none;
                color: #E11935;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
