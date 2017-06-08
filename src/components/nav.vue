<template>
    <div class="nav">
        <ul>
            <li><a href="#">在售商品</a></li>
            <li><a href="#">进货入库</a></li>
            <li><a href="#">收银台</a></li>
            <li><a href="#">其它操作</a></li>
            <li><a href="#">消息通知<span>2</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        
    }
</script>

<style lang="scss">
    .nav {
        width: 200px;
        margin-left: 50px;
        padding-top: 20px;
        background: #eee;
        min-height: 500px;
        ul{
            padding-left: 0;
            li {
                width: 150px;
                height: 50px;
                a {
                    display: block;
                    width: 195px;
                    height: 100%;
                    margin: auto;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 50px;
                    border-right: 5px solid #eee;
                    color: #333;
                    position: relative;
                    &:hover {
                        background: orange;
                        border-color: #333;
                    }
                    span {
                        display: inline-block;
                        position: absolute;
                        top: 10px;
                        left: 145px;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        border-radius: 50%;
                        background: #ff2e63;
                        color: white;
                    }
                }
            }
        }  
    }
</style>
