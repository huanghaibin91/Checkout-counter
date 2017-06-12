<template>
    <div class="commodity-operations">
        <div class="storage-box">
            <input placeholder="输入商品名称或编码查询" />
            <button>商品入库</button>
        </div>
        <div class="shoppinglist-box">
            <div class="title">
                <p>商品编码</p>
                <p>修改名称</p>
                <p>修改价格</p>
                <p>修改数量</p>
                <p>商品保质期</p>
                <p>删除商品</p>
            </div>
            <commodityOperationsList v-for="(shopping, index) in shoppingList" :getShopping="shopping" :getIndex="index"  :key="shopping.coding"></commodityOperationsList>
        </div>
    </div>
</template>

<script>

    import commodityOperationsList from './commodityOperationsList.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'commodityOperations',
        components: {
            commodityOperationsList,
        },
        data () {
            return {
                
            }
        },
        computed: {
            ...mapState([
                'shoppingList',
            ]),
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    .commodity-operations {
        width: 1000px;
        margin: 31px auto;
        >div.storage-box {
            height: 50px;
            margin-right: 100px;
            text-align: right;
            line-height: 50px;
            button {
                border: 1px solid #ededee;
                background: white;
                border-radius: 5px;
                height: 30px;
                &:hover {
                    background: #2F79BA;
                    color: white;
                }
            }
        }
        >div.shoppinglist-box {
            .title {
                height: 40px;
                color: #999;
                font-size: 14px;
                background: #f2f2f2;
                p {
                    justify-content: center;
                }
            }
            .list {
                font-size: 12px;
                color: #999;
            }
            div {
                display: flex;
                p {
                    height: 40px;
                    margin: 0;
                    line-height: 40px;
                    display: flex;
                    align-items: center;
                    input {
                        border: none;
                        padding: 5px;
                        background: white;
                    }
                    input.isName {
                        background: #ccc;
                    }
                    input.isPrice {
                        background: #ccc;
                    }
                    input.isNumber {
                        background: #ccc;
                    }
                    &:hover {
                        a {
                            display: inline-block;
                        }
                    }
                    a {
                        display: none;
                        width: 20px;
                        height: 20px;
                        margin-left: 5px;
                        background: url("../assets/image/pen.png") no-repeat center;
                        background-size: cover;
                    }
                    button {
                        width: 50px;
                        height: 35px;
                        border: none;
                        background: white;
                        background: url("../assets/image/trash.png") no-repeat center;
                        &:hover {
                            background: url("../assets/image/trash2.png") no-repeat center;
                        }
                    }
                }
                p:nth-child(1) {
                    width: 150px;
                    justify-content: center;
                }
                p:nth-child(2) {
                    width: 350px;
                    input {
                        width: 310px;
                    }
                }
                p:nth-child(3), p:nth-child(4), p:nth-child(5), p:nth-child(6) {
                    width: 125px;
                    input {
                        width: 80px;
                    }
                }
            }
        }
    }
</style>
