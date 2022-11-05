<template>
 <div class="flex absolute vh-auto top-4 left-2 right-2 w-90 center mw9">
  <div class="mr3 bg-white w-70 br3 pa3">
    <form @submit.prevent="createResume" class="flex justify-between flex-wrap">
      <div class="w-50-l w-100">
        <label for="email" class="db mb3 black-70 ttu fw7">Firstname</label>
        <input
          id="firstname"
          v-model="userData.firstname"
          name="firstname"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Firstname"
        >
      </div>
      <div class="w-50-l w-100">
        <label for="lastname" class="db mb3 black-70 ttu fw7">Lastname</label>
        <input
          id="lastname"
          v-model="userData.lastname"
          name="lastname"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Lastname"
        >
       </div>
       <div class="w-50-l w-100">
        <label for="email" class="db mb3 black-70 ttu fw7">Email</label>
        <input
          id="email"
          v-model="userData.email"
          name="email"
          type="email"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="email@email.com"
        >
       </div>
       <div class="w-50-l w-100">
        <label for="phone-number" class="db mb3 black-70 ttu fw7">Phone Number</label>
        <input
          id="phone-number"
          v-model="userData.phoneNumber"
          name="phone-number"
          type="number"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Phone Number"
        >
       </div>
       <div class="w-50-l w-100">
        <label for="linkedin" class="db mb3 black-70 ttu fw7">Linkedin</label>
        <input
          id="linkedin"
          v-model="userData.linkedin"
          name="linkedin"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="https://"
        >
       </div>
      
       <div class="w-50-l w-100">
        <label for="github" class="db mb3 black-70 ttu fw7">GitHub</label>
        <input
          id="github"
          v-model="userData.github"
          name="github"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="https://"
        >
       </div>

       <!-- Languages  -->
       <div class="w-50-l w-100">
        <label for="languages" class="db mb3 black-70 ttu fw7">Languages</label>
        <input
          id="languages-one"
          v-model="userData.languageOne"
          name="languages-one"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Languages"
        >
        <input
          id="languages-two"
          v-model="userData.languageTwo"
          name="languages-two"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Languages"
        >
        <input
          id="languages-three"
          v-model="userData.languageThree"
          name="languages-three"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Languages"
        >
       </div>

       <!-- Frameworks  -->
       <div class="w-50-l w-100">
        <label for="frameworks" class="db mb3 black-70 ttu fw7">Frameworks</label>
        <input
          id="frameworks-one"
          v-model="userData.frameworkOne"
          name="frameworks-one"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Frameworks"
        >
        <input
          id="frameworks-two"
          v-model="userData.frameworkTwo"
          name="frameworks-two"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Frameworks"
        >
        <input
          id="frameworks-three"
          v-model="userData.frameworkThree"
          name="frameworks-three"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Frameworks"
        >
       </div>

        <!-- Databases  -->
        <div class="w-50-l w-100">
        <label for="database" class="db mb3 black-70 ttu fw7">Databases</label>
        <input
          id="database-one"
          v-model="userData.databaseOne"
          name="database-one"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Databases"
        >
        <input
          id="database-two"
          v-model="userData.databaseTwo"
          name="database-two"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Databases"
        >
        <input
          id="database-three"
          v-model="userData.databaseThree"
          name="database-three"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Databases"
        >
        </div>

         <!-- Tools  -->
         <div class="w-50-l w-100">
        <label for="tool" class="db mb3 black-70 ttu fw7">Tools</label>
        <input
          id="tool-one"
          v-model="userData.toolOne"
          name="tool-one"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Tools"
        >
        <input
          id="tool-two"
          v-model="userData.toolTwo"
          name="tool-two"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Tools"
        >
        <input
          id="tool-three"
          v-model="userData.toolThree"
          name="tool-three"
          type="text"
          class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
          placeholder="Tools"
        >
        </div>


        <div class="w-50-l w-100">
          <label for="project-experience" class="db mb3 black-70 fw7 ttu">project experience</label>
          <textarea v-model="userData.projectExperience" name="project-experience" id="project-experience" class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"></textarea>
        </div>
        <div class="w-50-l w-100">
          <label for="work-experience" class="db mb3 black-70 fw7 ttu">work experience</label>
          <textarea v-model="userData.workExperience" name="work-experience" id="work-experience" class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"></textarea>
        </div>
        <div class="w-50-l w-100">
          <label for="education" class="db mb3 black-70 fw7 ttu">Education</label>
          <textarea v-model="userData.education" name="education" id="education" class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"></textarea>
        </div>
        <div class="w-50-l w-100">
          <label for="about" class="db mb3 black-70 fw7 ttu">About Me</label>
          <textarea v-model="userData.about" name="about" id="about" class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"></textarea>
        </div>

        <div class="dn" v-if="showTemplate">
          <TheResumeTemplate :userData="userData" ref="ref" />
        </div>
      
        <div class="w-100">
          <button type="submit" class="f6 ttu tracked black-80 bg-black pa3 br3 white bb link b--black hover-black hover-bg-gold bg-animate pointer">Create Resume</button>
        </div>
    </form>
   
   
  </div>
  <div class="bg-white w-30 br3 pa3">
    <iframe :src="iframeSRC ? iframeSRC : initialSRC" width="100%" height="100%" />
  </div>
 </div>
</template>

<script>
import TheResumeTemplate from "@/components/TheResumeTemplate.vue";

export default {
  components: {
    TheResumeTemplate,
  },
  data: () => ({
    userData: {
      firstname: '',
      lastname: '',
      linkedin: '',
      github: '',
      phoneNumber: null,
      email: '',
      languageOne: '',
      languageTwo: '',
      languageThree: '',
      frameworkOne: '',
      frameworkTwo: '',
      frameworkThree: '',
      databaseOne: '',
      databaseTwo: '',
      databaseThree: '',
      toolOne: '',
      toolTwo: '',
      toolThree: '',
      projectExperience: '',
      workExperience: '',
      education: '',
      about:''
    },
    showTemplate: false,
    iframeSRC: '',
    initialSRC: 'https://res.cloudinary.com/moerayo/image/upload/v1667335911/cv_gen.pdf'
  }),
  methods: {
    createResume(){
      if(!this.userData.firstname){
        this.showTemplate = false
      } else {
        this.showTemplate = true
        this.$nextTick(() => {
         this.iframeSRC = this.$refs.ref.$refs.ref.$el.src
        });
      }
    }
  }
 
}
</script>

<style>
  .top-4 {
    top: 6.5rem
  }
</style>