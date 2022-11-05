<template>
  <div>
   <cld-image publicId="cv_gen.pdf" ref="ref" >
    <cld-transformation flags="rasterize" />
      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 75, text: `${userData.firstname} ${userData.lastname}`}" color="#58697B" gravity="west" x="100" y="-670"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 18, text: userData.phoneNumber}" color="#58697B" gravity="west" x="180" y="-577"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 18, text: userData.email}" color="#58697B" gravity="west" x="550" y="-577"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 35, text: userData.github}" color="#58697B" gravity="west" x="180" y="-545"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 18, text: userData.linkedin}" color="#58697B" gravity="west" x="580" y="-547"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 25, text: userData.about}" color="#58697B" gravity="west" x="110" y="-500"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.languageOne}" color="#58697B" gravity="west" x="110" y="-350"/>


      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.languageTwo}" color="#58697B" gravity="west" x="110" y="-320"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.languageThree}" color="#58697B" gravity="west" x="110" y="-290"/> 


      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.frameworkOne}" color="#58697B" gravity="west" x="380" y="-350"/>


      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.frameworkTwo}" color="#58697B" gravity="west" x="380" y="-320"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.frameworkThree}" color="#58697B" gravity="west" x="380" y="-290"/> 


      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.databaseOne}" color="#58697B" gravity="west" x="690" y="-350"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.databaseTwo}" color="#58697B" gravity="west" x="690" y="-320"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.databaseThree}" color="#58697B" gravity="west" x="690" y="-290"/> 

     

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolOne}" color="#58697B" gravity="west" x="965" y="-350"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolTwo}" color="#58697B" gravity="west" x="965" y="-320"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolThree}" color="#58697B" gravity="west" x="965" y="-290"/> 
       <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolOne}" color="#58697B" gravity="west" x="965" y="-350"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolTwo}" color="#58697B" gravity="west" x="965" y="-320"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 20, text: userData.toolThree}" color="#58697B" gravity="west" x="965" y="-290"/> 

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 35, text: userData.projectExperience}" color="#58697B" gravity="west" x="110" y="-160"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 35, text: userData.workExperience}" color="#58697B" gravity="west" x="110" y="250"/>

      <cld-transformation :overlay="{fontFamily: 'Open Sans', fontSize: 40, text: userData.education}" color="#58697B" gravity="west" x="110" y="600"/> 


    </cld-image>
     
  </div>
</template>

<script>
export default {
  name: "TheResumeTemplate",
  // props: {
  //   firstname: { 
  //     type: String, 
  //     required: true 
  //   },
  //   lastname: { 
  //     type: String, 
  //     required: true
  //   },
  //   about: { 
  //     type: String, 
  //     required: true
  //   },
  //   phoneNumber: { 
  //     type: Number, 
  //     required: true
  //   },
  //   email: { 
  //     type: String, 
  //     required: true
  //   },
  //   github: { 
  //     type: String, 
  //     required: true
  //   },
  //   linkedin: { 
  //     type: String, 
  //     required: true
  //   },
  //   languageOne: { 
  //     type: String, 
  //     required: true
  //   },
  //   languageTwo: { 
  //     type: String, 
  //     required: true
  //   },
  //   languageThree: { 
  //     type: String, 
  //     required: true
  //   },

  //   frameworkOne: { 
  //     type: String, 
  //     required: true
  //   },
  //   frameworkTwo: { 
  //     type: String, 
  //     required: true
  //   },
  //   frameworkThree: { 
  //     type: String, 
  //     required: true
  //   },

  //   databaseOne: { 
  //     type: String, 
  //     required: true
  //   },
  //   databaseTwo: { 
  //     type: String, 
  //     required: true
  //   },
  //   databaseThree: { 
  //     type: String, 
  //     required: true
  //   },

  //   toolOne: { 
  //     type: String, 
  //     required: true
  //   },
  //   toolTwo: { 
  //     type: String, 
  //     required: true
  //   },
  //   toolThree: { 
  //     type: String, 
  //     required: true
  //   },
  //   projectExperience: { 
  //     type: String, 
  //     required: true
  //   },
  //   workExperience: { 
  //     type: String, 
  //     required: true
  //   },
  //   education: { 
  //     type: String, 
  //     required: true
  //   },
  // },

  props: {
    userData: {
      type: Object,
      required: true,
    }
  }
}
</script>