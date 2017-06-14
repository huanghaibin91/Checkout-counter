<template>
    <div class="shopping-record">
        <div class="shopping-record-title">
            <p>收银记录</p>
            <div>
                <calendar></calendar>
                <button>查询</button>
            </div>
        </div>
        <div class="shopping-record-list" v-for="shoppingRecord in shoppingRecordList">
            <p>
                <span>日期&nbsp;&nbsp;<span>{{ shoppingRecord.date }}</span></span>
                <span>收银员&nbsp;&nbsp;<span>小明</span></span>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>商品编码</th>
                        <th>商品名称</th>
                        <th>数量</th>
                        <th>金额</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(shopping, index) in shoppingRecord.shoppingList">
                        <td>{{ shopping.coding }}</td>
                        <td>{{ shopping.name }}</td>
                        <td>{{ shoppingRecord.shoppingNumber[index] }}</td>
                        <td>{{ shopping.price }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                    <td>合计：{{ shoppingRecord.total }}</td>
                </tfoot>
            </table>
            <button title="查看所有"></button>
        </div>
    </div>
</template>

<script>

    import calendar from './calendar.vue'

    import { mapState } from 'vuex'

    export default {
        name: 'shoppingRecord',
        components: {
            calendar,
        },
        computed: {
            ...mapState([
                'shoppingRecordList',
            ]),
        },
        methods: {
            
        },
    }
</script>

<style lang="scss">
    .shopping-record {
        width: 1000px;
        margin: 31px auto;
        padding: 20px 10px;
        >div.shopping-record-title {
            width: 1000px;
            background: white;
            display: flex;
            justify-content: space-between;
            position: fixed;
            top: 31px;
            z-index: 9;
            >p {
                border-left: 5px solid aqua;
                text-indent: 1em;
                font-size: 20px;
                font-weight: bold;
            }
            >div {
                position: relative;
                display: flex;
                align-items: center;
                button {
                    position: absolute;
                    right: 0;
                    width: 80px;
                    height: 30px;
                    border: 1px solid #ededee;
                    border-radius: 5px;
                    background: white;
                    &:hover {
                        background: #2F79BA;
                        color: white;
                    }
                }
            }
        }
        >div.shopping-record-list {
            margin: 55px auto;
            width: 100%;
            p {
                display: flex;
                justify-content: space-between;
                background: #F8F8F8;
                border-bottom: 1px solid #EAEAEA;
                margin: 0;
                padding: 10px 0;
                span {
                    font-size: 14px;
                    padding: 0px 20px;
                    span {
                        font-size: 16px;
                        color: #E11935;
                    }
                }
            }
            button {
                width: 100%;
                height: 24px;
                border: none;
                background: #eee url("../assets/image/down.png") no-repeat center;
            }
            table {
                width: 100%;
                font-size: 14px;
                th, td {
                    text-align: center;
                }
                tr {
                    height: 30px;
                }
                th:nth-child(1), td:nth-child(1) {
                    width: 20%;
                }
                th:nth-child(2), td:nth-child(2) {
                    width: 50%;
                }
                th:nth-child(3), td:nth-child(3) {
                    width: 15%;
                }
                th:nth-child(4), td:nth-child(4) {
                    width: 15%;
                }
                tfoot td {
                    border-top: 1px solid #ededee;
                }
            }
        }
    }
</style>
