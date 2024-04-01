<template>
    <div class="header-outline">
        <ul>
            <li>Introduction</li>
            <li>Side Project</li>
        </ul>
        <SwitchButtonDarkAndLightThene></SwitchButtonDarkAndLightThene>
    </div>
</template>
<style lang="scss" scoped>
.header-outline{
    box-sizing: border-box;
    width:100%;
    border-bottom:1px solid var(--border-color);
    padding:12px 24px;
    display:flex;
    justify-content: space-between;
    ul{
        padding:0;
        margin:0;
        display:flex;
        align-items: center;
        gap:24px;
        list-style: none;
        color:var(--primary-text-color);
        li{
            cursor:pointer;
        }
    }
}
</style>