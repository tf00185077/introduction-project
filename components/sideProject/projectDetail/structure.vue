<template>
    <li class="project">
        <div>
          <p class="title">{{ props.projectName }}</p>
          <div class="strucure">
            <p class="list">For What</p>
            <p class="list">Technique</p>
            <p class="list">Content</p>
          </div>
        </div>
      </li>
</template>
<script setup lang="ts">
const props = defineProps(["projectName"]);
</script>
<style scoped lang="scss">
.project {
    position:relative;
    .title{
        margin:0;
    }
    .strucure {
        position:relative;
        padding-left:12px;
        .list{
            position:relative;
            padding-left:18px;
            &:after{
                content:"";
                height:calc(100%);
                border:1px dashed var(--border-color);
                left:0;
                top:0;
                transform: translate(0,-50%);
                position:absolute;
            }
            &::before{
                content:"";
                width:12px;
                border:1px dashed var(--border-color);
                position:absolute;
                top:50%;
                left:0;
                transform: translate(0,-50%);
            }
        }
    }
}
</style>