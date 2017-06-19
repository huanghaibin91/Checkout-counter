<template>
    <div class="shopping-record-list">
        <p>
            <span>日期<span>{{ getShoppingRecord.date }}</span></span>
            <span>收银员<span>{{ accountName }}</span></span>
        </p>
        <table cellspacing="0" :class="{ fullHeight: fullHeightFlag }">
            <thead>
                <tr>
                    <th>商品编码</th>
                    <th>商品名称</th>
                    <th>数量</th>
                    <th>金额</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(shopping, index) in getShoppingRecord.shoppingList">
                    <td>{{ shopping.coding }}</td>
                    <td>{{ shopping.name }}</td>
                    <td>{{ getShoppingRecord.shoppingNumber[index] }}</td>
                    <td>￥ {{ shopping.price }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>合计：￥ {{ getShoppingRecord.total }}</td>
                </tr>
            </tfoot>
        </table>
        <div v-if="fullHeightBtnFlag">
            <button title="查看所有" @click="changeFullHeight"></button>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        props: ['getShoppingRecord',],
        data () {
            return {
                fullHeightFlag: false,
            }
        },
        computed: {
            ...mapState([
                'accountName',
            ]),
            // 显示全部按钮
            fullHeightBtnFlag () {
                if (this.getShoppingRecord.shoppingList.length > 3) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
             // 表格全部显示或隐藏
            changeFullHeight () {
                this.fullHeightFlag = !this.fullHeightFlag;
            },
        }
    }
</script>

<style lang="scss">
    div.shopping-record-list {
        margin: 20px auto;
        width: 1000px;
        border: 1px solid #eaffd0;
        border-radius: 5px;
        p {
            display: flex;
            justify-content: space-between;
            background: #d6e6f2;
            border-bottom: 1px solid #95e1d3;
            margin: 0;
            padding: 10px 0;
            span {
                font-size: 14px;
                padding: 0px 10px;
                span {
                    font-weight: bold;
                    color: #b83b5e;
                }
            }
        }
        div {
            height: 24px;
            display: flex;
            align-items: center;
            button {
                width: 100%;
                height: 24px;
                border: none;
                background: #d6e6f2 url("../../assets/image/down.png") no-repeat center;
            }
        }
        table.fullHeight {
            width: 100%;
            max-height: 100%;
        }
        table {
            display: block;
            width: 1000px;
            max-height: 150px;
            transition: all 0s ease;
            overflow: hidden;
            font-size: 14px;
            thead tr, tbody td, tfoot td {
                background: #f7fbfc;
            }
            th, td {
                text-align: center;
            }
            tr {
                height: 30px;
            }
            th:nth-child(1), td:nth-child(1) {
                width: 200px;
            }
            th:nth-child(2), td:nth-child(2) {
                width: 500px;
            }
            th:nth-child(3), td:nth-child(3) {
                width: 150px;
            }
            th:nth-child(4), td:nth-child(4) {
                width: 150px;
            }
            tfoot td {
                border-top: 1px solid #b9d7ea;
                color: #E11935;
                font-weight: bold;
            }
        }
    }
</style>
