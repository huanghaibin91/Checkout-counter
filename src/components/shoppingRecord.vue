<template>
    <div class="shoppingRecord">
        <p>收银记录</p>
        <div>
            <p><span>日期&nbsp;&nbsp;<i>2017-5-25</i></span><span>总金额&nbsp;&nbsp;<i>199</i>&nbsp;&nbsp;元</span></p>
            <table>
                <thead>
                    <tr>
                        <th>商品名称</th>
                        <th>数量</th>
                        <th>金额</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>限购型黑猫</td>
                        <td>1</td>
                        <td>199</td>
                    </tr>
                    <tr>
                        <td>限购型黑猫</td>
                        <td>1</td>
                        <td>199</td>
                    </tr>
                    <tr>
                        <td>限购型黑猫</td>
                        <td>1</td>
                        <td>199</td>
                    </tr>
                    <tr>
                        <td>限购型黑猫</td>
                        <td>1</td>
                        <td>199</td>
                    </tr>
                    <tr>
                        <td>限购型黑猫</td>
                        <td>1</td>
                        <td>199</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shoppingRecord',

    }
</script>

<style lang="scss">
    .shoppingRecord {
        width: 896px;
        padding: 10px 20px;
        >p {
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 20px;
            font-weight: bold;
        }
        >div {
            width: 100%;
            height: 122px;
            overflow: hidden;
            transition: all 1s ease;
            &:hover {
                height: 100%;
            }
            p {
                display: flex;
                justify-content: space-between;
                background: #F8F8F8;
                border-bottom: 1px solid #EAEAEA;
                margin: 0;
                padding: 10px 0;
                span {
                    font-size: 14px;
                    i {
                        font-size: 16px;
                        color: #E11935;
                    }
                }
            }
            table {
                width: 100%;
                font-size: 14px;
                th, td {
                    text-align: left;
                }
                tr {
                    height: 30px;
                }
            }
        }
    }
</style>
