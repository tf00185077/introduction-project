<template>
    <div class="btn-outline">
        <div class="btn-move-outline">
            <div class="sun"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.btn-outline{
    border: 1px solid var(--border-color);
    min-width:60px;
    height:12px;
    border-radius: 24px;
    padding:14px 6px;
    display:flex;
    align-items: center;

}
.btn-move-outline{
    width:100%;
    height:2px;
    background-color: var(--primary-text-color);
    position:relative;
    .sun{
        cursor: pointer;
        position:absolute;
        top:50%;
        left:0;
        transform:translateY(-50%);
        width:50%;
        padding-top:50%;
        background-color: #fff;
        border-radius: 50%;
        background-color: #FFD580 ;
        box-shadow: 0 0 10px #FFD580;
    }
}
</style>