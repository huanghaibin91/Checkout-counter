<template>
    <div class="quick-search">
        <button>休闲零食</button>
        <button>酒水饮料</button>
        <button>粮油副食</button>
        <button>生鲜水果</button>
        <button>日常洗护</button>
    </div>
</template>

<script>
    export default {
        name: 'quickSearch',
    }
</script>

<style lang="scss">
    .quick-search {
        width: 896px;
        height: 30px;
        padding: 10px 20px;
        border-bottom: 1px solid #333;
        button {
            margin-right: 10px;
            background: white;
            border: 1px solid #333;
            font-size: 14px;
            font-weight: bold;
            &:hover {
                background: #444;
                color: white;
            }
        }
    }
</style>
