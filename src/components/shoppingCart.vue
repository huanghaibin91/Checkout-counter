<template>
    <div class="shopping-cart">
        <p>购物车</p>
        <table cellspacing="0">
            <thead>
                <tr>
                    <td><input id="check-all" type="checkbox" /><label for="check-all">&nbsp;全选</label></td>
                    <td>名称</td>
                    <td>数量</td>
                    <td>金额</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td><img src="../assets/image/17193476.jpg" /><span>限购型黑猫限购型黑猫限购型黑猫限购型黑猫限购型黑猫</span></td>
                    <td><button>-</button><input type="text" value="1" /><button>+</button></td>
                    <td>￥ <span>199</span></td>
                    <td><button>删除</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td><img src="../assets/image/17193476.jpg" /><span>限购型黑猫限购型黑猫限购型黑猫限购型黑猫限购型黑猫</span></td>
                    <td><button>-</button><input type="text" value="1" /><button>+</button></td>
                    <td>￥ <span>199</span></td>
                    <td><button>删除</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td><img src="../assets/image/17193476.jpg" /><span>限购型黑猫限购型黑猫限购型黑猫限购型黑猫限购型黑猫</span></td>
                    <td><button>-</button><input type="text" value="1" /><button>+</button></td>
                    <td>￥ <span>199</span></td>
                    <td><button>删除</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">已选商品<span>0</span>件</td>
                    <td>合计: ￥<span>12220</span></td>
                    <td><button>结&nbsp;&nbsp;&nbsp;算</button></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'shoppingCart',
        data () {

        },

    }
</script>

<style lang="scss">
    .shopping-cart {
        width: 896px;
        padding: 10px 20px;
        p {
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 20px;
            font-weight: bold;
        }
        table {
            width: 100%;
            th, td {
                text-align: center;
            }
            th:nth-child(1), td:nth-child(1) {
                width: 10%;
            }
            th:nth-child(2), td:nth-child2() {
                width: 40%;
            }
            th:nth-child(3), td:nth-child(3) {
                width: 20%;
            }
            th:nth-child(4), td:nth-child(4) {
                width: 20%;
            }
            th:nth-child(5), td:nth-child(5) {
                width: 10%;
            }
            tr {
                width: 100%;
                height: 60px;
            }
            thead tr {
                width: 100%;
                height: 40px;
                background: #F8F8F8;
                th {
                    border-bottom: 1px solid #EAEAEA;
                }
            }
            tbody tr {
                td {
                    padding: 10px 0px;
                }
                td:nth-child(1) {

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
                        font-size: 18px;
                        font-weight: bold;
                    }
                    input {
                        width: 50px;
                        background: white;;
                        color: #E11935;
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
            tfoot tr {
                height: 60px;
                background: #F8F8F8;
                td:nth-child(1) {
                    text-align: right;
                    padding: 0px 50px;
                    border: 1px solid #EAEAEA;
                    border-right: none;
                    span {
                        padding: 0 10px;
                        font: bold 18px;
                        color: #E11935;
                    }
                }
                td:nth-child(2) {
                    border-top: 1px solid #EAEAEA;
                    border-bottom: 1px solid #EAEAEA;
                    span {
                        font: bold 20px;
                        color: #E11935;
                    }
                }
                td:nth-child(3) {
                    border: 1px solid #EAEAEA;
                    border-left: none;
                    button {
                        border: none;
                        width: 80px;
                        height: 40px;
                        text-align: center;
                        background: #E11935;
                        color: white;
                    }
                }
            }
        }
    }
</style>
