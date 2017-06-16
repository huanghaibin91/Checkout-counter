<template>
    <div class="shopping-record">
        <div class="shopping-record-title">
            <div>
                <p>收银记录</p>
                <div>
                    <calendar @getdate="searchdate"></calendar>
                    <button @click="searchShoppingRecord">查询</button>
                </div>
            </div>
        </div>
        <shoppingRecordList v-for="shoppingRecord in searchRecordList" :getShoppingRecord="shoppingRecord" :key="shoppingRecord.date"></shoppingRecordList>
    </div>
</template>

<script>

    import calendar from '../calendar.vue'
    import shoppingRecordList from './shoppingRecordList.vue'

    import { mapState } from 'vuex'

    export default {
        name: 'shoppingRecord',
        components: {
            calendar,
            shoppingRecordList,
        },
        data () {
            return {
                date: '',
                shoppingRecordList: this.$store.state.shoppingRecordList,
                searchRecordList: this.$store.state.shoppingRecordList,
            }
        },
        computed: {
            ...mapState([
                'accountName',
            ]),
        },
        methods: {
            // 要查询的时间
            searchdate (arg) {
                this.date = arg;
            },
            // 查询特定时间的收银记录
            searchShoppingRecord () {
                let datetext = this.date;
                this.searchRecordList = this.shoppingRecordList.filter(function (record) {
                    if (datetext === '') {
                        return record;
                    } else {
                        return record.date.includes(datetext);
                    }
                });
            }
        },
    }
</script>

<style lang="scss">
    .shopping-record {
        width: 100%;
        margin: 120px auto;
        >div.shopping-record-title {
            width: 100%;
            background: white;
            border-bottom: 1px solid #ededee;
            box-shadow: 0px 2px 2px #ccc;
            position: fixed;
            top: 31px;
            z-index: 9;
           >div {
                width: 1000px;
                margin: auto;
                display: flex;
                justify-content: space-between;
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
                    >button {
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
                    .calendar>input {
                        height: 18px;
                        padding: 5px 10px;
                        border-radius: 3px;
                        border: 1px solid #ededee;
                    }
                }
           }
        }
    }
</style>
