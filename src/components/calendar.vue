<template>
    <div class="calendar">
        <input type="text" placeholder="选择日期" @focus="trueDateBox" :value="date" />
        <div class="date-box" v-if="dateBoxFlag">
            <div class="day-select">
                <div>
                    <button>&laquo;</button>
                    <button>&lt;</button>
                </div>
                <div>
                    <input type="text" value="2017" />年
                    <input type="text" value="5" />月
                </div>
                <div>
                    <button>&gt;</button>
                    <button>&raquo;</button>
                </div>
            </div>
            <div class="day-screen">
                <div>
                    <span v-for="week in week">{{ week }}</span>
                </div>
                <div>
                    <span v-for="n in 42">{{ n }}</span>
                </div>
                <!--<div>
                    <button>取消</button>
                    <button @click="falseDateBoxFlag">确认</button>
                </div>-->
            </div>
            <!--<div class="month-screen" v-if="monthScreenFlag" @click="falseMonthFlag">
                <span v-for="month in 12">{{ month }}</span>
            </div>-->
            <!--<div class="year-screen" v-if="yearScreenFlag" @click="falseYearFlag">
                <span v-for="year in 15">{{ year }}</span>
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'calendar',
        data () {
            return {
                date: '',
                week: ['一', '二', '三', '四', '五', '六', '日'],
                dateBoxFlag: false,
                // dayScreenFlag: true,
                // monthScreenFlag: false,
                // yearScreenFlag: false,
            }
        },
        computed: {

        },
        methods: {
            trueDateBox () {
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth();
                let day = date.getDate();
                this.date = year + '-' + month + '-' + day;
                this.dateBoxFlag = true;
            },
            falseDateBoxFlag () {
                this.dateBoxFlag = false;
            },
            // trueMonthFlag () {
            //     this.monthScreenFlag = true;
            // },
            // falseMonthFlag () {
            //     this.monthScreenFlag = false;
            // },
            // trueYearFlag () {
            //     this.yearScreenFlag = true;
            // },
            // falseYearFlag () {
            //     this.yearScreenFlag = false;
            // },
        }
    }
</script>

<style lang="scss">
    .calendar {
        width: 280px;
        padding: 5px;
        position: relative;
        >input {
            width: 50%;
            height: 20px;
            padding: 5px;
        }
        >div {
            width: 100%;
            border: 1px solid #EAEAEA;
            border-radius: 5px;
            box-shadow: 2px 2px 2px #eee;
            position: absolute;
            top: 50px;
            left: 0px; 
            div.day-select {
                display: flex;
                padding: 5px 0;
                height: 30px;
                line-height: 30px;
                color: #888888;
                border-bottom: 1px solid #ccc;
                input, button {
                    border: none;
                    background: white;
                    text-align: center;
                    color: #888888;
                    cursor: pointer;
                }
                >div:nth-child(1), >div:nth-child(3) {
                    width: 20%;
                }
                >div:nth-child(2) {
                    width: 60%;
                    display: flex;
                    justify-content: center;
                    input:hover {
                        background: #eee;
                    }
                    input:nth-child(1) {
                        width: 50px;
                    }
                    input:nth-child(2) {
                        width: 30px;
                    }
                }
            }
            div.day-screen {
                >div {
                    width: 100%;
                    display: flex;
                    font-size: 14px;
                    justify-content: center;
                    flex-wrap: wrap;
                    span {
                        width: 40px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        border-bottom: 1px solid #ccc;
                    }
                }
                >div:nth-child(1) {
                    font-weight: bold;
                    background: #F8F8F8;
                }
                >div:nth-child(2) {
                    span {
                        cursor: pointer;
                        &:hover {
                            background: #21A5EF;
                            color: white;
                        }
                    }
                }
                // >div:nth-child(3) {
                //     justify-content: flex-end;
                //     padding: 5px;
                //     button {
                //         border: none;
                //         width: 50px;
                //         height: 30px;
                //         background: #21A5EF;
                //         color: white;
                //         margin-right: 10px;
                //         border-radius: 3px;
                //     }
                // }
            }
            // div.month-screen, div.year-screen {
            //     width: 100%;
            //     display: flex;
            //     justify-content: center;
            //     flex-wrap: wrap;
            //     span {
            //         text-align: center;
            //         width: 70px;
            //         height: 40px;
            //         font-size: 16px;
            //         line-height: 40px;
            //         &:hover {
            //             background: #21A5EF;
            //             color: white;
            //         }
            //     }
            // }
            // div.year-screen {
            //     span {
            //         width: 55px;
            //     }
            // }
        }
    }
</style>
