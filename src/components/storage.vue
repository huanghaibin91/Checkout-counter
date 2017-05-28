<template>
    <div class="storage">
        <p>商品入库</p>
        <form class="storage-input">
            <div>
                <label>商品名称</label><input id="shopping-name" type='type' placeholder="请输入商品名称" required />
                <span></span>
            </div>
            <div>
                <label>商品编码</label><input id="shopping-coding" type='type' placeholder="请输入商品编码" required />
                <span>商品编码为纯数字，不含字母或符号</span>
            </div>
            <div>
                <label>商品价格</label><input id="shopping-price" type='type' placeholder="请输入商品价格" required />
                <span>商品价格为数字，且最多一位小数</span>
            </div>
            <div><label>商品品类</label>
                <select>
                    <option>休闲零食</option>
                    <option>酒水饮料</option>
                    <option>粮油副食</option>
                    <option>生鲜水果</option>
                    <option>日常洗护</option>
                </select>
            </div>
            <div>
                <label for="shopping-date">商品保质期</label>
                <select>
                    <option>2017</option>
                </select>
                -
                <select>
                    <option v-for="index in 12" v-bind:value="index">{{index}}</option>
                </select>
                -
                <select>
                    <option>27</option>
                </select>
            </div>
            <div><label for="shopping-image">商品图片</label><input type="file" /></div>
            <div class="storage-submit"><button>确认提交</button></div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'storage',
        
    }
</script>

<style lang="scss">
    .storage {
        width: 896px;
        padding: 10px 20px;
        >p {
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 20px;
            font-weight: bold;
        }
        form.storage-input {
            width: 340px;
            margin: auto;
            padding: 20px 50px;
            border: 1px solid #333;
            div {
                display: flex;
                margin: 20px 0px;
                padding-bottom: 20px;
                position: relative;
                label, input {
                    display: block;
                }
                label {
                    width: 80px;
                    text-align: right;
                    margin-right: 20px;
                    line-height: 32px;
                }
                input {
                    width: 200px;
                    padding: 5px;
                    border: 1px solid #333;
                }
                span {
                    position: absolute;
                    font-size: 14px;
                    top: 40px;
                    left: 100px;
                }
            }
            div.storage-submit {
                justify-content: flex-end;
                button {
                    width: 100px;
                    height: 30px;
                    background: white;
                    border: 1px solid #333;
                    &:hover {
                        background: #52616b;
                        color: white;
                    }
                }
            }
        }
    }
</style>
