<template>
  <div>
    <div class="title">Self introduction</div>
    <div class="self-introduction">
      <div>
        <p>Name：Chen-Ting-Yang</p>
        <p>Occupation：Frontend Engineer</p>
        <div>
          <p>Work Experience：</p>
          <ul>
            <li>Wasa Team</li>
            <li>FUNDAY</li>
          </ul>
        </div>
        <div>
          <p>Professional Skills：</p>
          <ul v-if="skillData">
            <li v-for="skill in skillData" :key="skill">
              <SkillLevel
                :skill-level="skill['skill-level']"
                :skill-name="skill['skill-name']"
              ></SkillLevel>
            </li>
          </ul>
        </div>
        <div>
          <p>Interests and Hobbies：</p>
          <ul>
            <li>Playing video games</li>
            <li>Playing the piano</li>
          </ul>
        </div>
        <p>Goals or Expectations：To develop a mature product</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { data: skillData, refresh: getSkillData } = await useFetch(
  "/api/getAllSkillDetails"
);
</script>
<style lang="scss" scoped>
.title {
  color: var(--primary-text-color);
  font-size: 24px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 1px;
    background: var(--primary-text-color);
    bottom: -5px;
    left: 0;
  }
}
.self-introduction {
  color: var(--primary-text-color);
  margin-left: 36px;
}
</style>