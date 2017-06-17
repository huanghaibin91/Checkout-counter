<template>
    <div class="commodity-operations">
        <div class="storage-box">
            <input v-model="searchText" placeholder="输入商品名称或编码查询" />
            <button @click="changeStorageFlag">商品入库</button>
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
            <commodityOperationsList v-for="(shopping, index) in shoppingList" :getShopping="shopping" :key="shopping.coding"></commodityOperationsList>
        </div>
        <storage :getStorageFlag="storageFlag" @emitStorageFlag="changeStorageFlag"></storage>
    </div>
</template>

<script>

    import commodityOperationsList from './commodityOperationsList.vue'
    import storage from './storage.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'commodityOperations',
        data () {
            return {
                searchText: '',
                allShoppingList: this.$store.state.shoppingList,
                shoppingList: this.$store.state.shoppingList,
                storageFlag: false,
            }
        },
        components: {
            commodityOperationsList,
            storage,
        },
        watch: {
            // 搜索商品
            searchText: function (val) {
                this.shoppingList = this.allShoppingList.filter(function (shopping) {
                   if (shopping.name.includes(val) || shopping.coding.includes(val)) {
                       return shopping;
                   }  
                });
            },
        },
        methods: {
            changeStorageFlag () {
                this.storageFlag = !this.storageFlag;
            },
        }
    }
</script>

<style lang="scss">
    .commodity-operations {
        width: 1000px;
        margin: 31px auto;
        >div.storage-box {
            height: 50px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input {
                width: 300px;
                height: 20px;
                padding: 3px 30px;
                margin-left: 100px;
                border: 1px solid #ededee;
                background: url("../../assets/image/search.png") no-repeat left center;
                background-size: 24px;
            }
            button {
                border: 1px solid #ededee;
                background: white;
                border-radius: 5px;
                height: 30px;
                margin-right: 100px;
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
                color: #333;
                font-weight: bold;
                border-top: 2px solid #ededee;                
                border-bottom: 2px solid #ededee;
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
                        background: #ffd460;
                    }
                    input.isPrice {
                        background: #ffd460;
                    }
                    input.isNumber {
                        background: #ffd460;
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
                        background: url("../../assets/image/pen.png") no-repeat center;
                        background-size: cover;
                    }
                    button {
                        width: 50px;
                        height: 35px;
                        border: none;
                        background: white;
                        background: url("../../assets/image/trash.png") no-repeat center;
                        &:hover {
                            background: url("../../assets/image/trash2.png") no-repeat center;
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
                p:nth-child(3), p:nth-child(4) {
                    width: 125px;
                    input {
                        width: 80px;
                    }
                }
                p:nth-child(5), p:nth-child(6) {
                    width: 125px;
                    justify-content: center;
                }
            }
        }
    }
</style>
