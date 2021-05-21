<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar> 
          <ion-title size="large">功能测试</ion-title>
        </ion-toolbar>
      </ion-header>
    

  <ion-list>
    <ion-item>
      <ion-label>{{urls[0]}}</ion-label>
    </ion-item>
     <ion-item>
      <ion-label>{{urls[1]}}</ion-label>
    </ion-item>
  </ion-list>
    
    <div class="flex4">
        循环
        <ion-toggle class="width40" @ionChange="isAuto"
        :checked="auto"></ion-toggle>
       <ion-button class="button" @click="start()">
        播放
      </ion-button>
        <ion-button class="button back-button" @click="pause()">
        暂停
      </ion-button>
        <ion-button class="button back-button" @click="stop()">
        停止
      </ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonToggle } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { Audioplayer } from 'capacitor-audioplayer';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonButton,IonToggle },
  data() {
    return {
        urls:['http://cjq.cdbaolan.com/home.mp3','http://cjq.cdbaolan.com/playing.mp3'],
        auto: true,
        nowSong:0
      }
  },

  mounted() {
    console.log('mounted')
    Audioplayer.addListener('nextSong',(info)=>{
      console.log('nextSong fired')
     this.nowSong = this.nowSong + 1
      if (this.nowSong>=this.urls.length){
        if (this.auto==true){
           this.nowSong = 0;
           this.start();
        }else{
          Audioplayer.stop()
        }
      }else{
          this.start();
      }
    })
  },
  methods: {
   async start(){
     console.log('start')
     console.log(this.nowSong)
     console.log(this.urls[this.nowSong])
     Audioplayer.start({value:this.urls[this.nowSong]})
   },
   pause(){
     console.log('pause')
      Audioplayer.pause()
   },
   isAuto(event){
     this.auto = event.detail.checked
     console.log(this.auto)
   },
   stop(){
     console.log('stop')
      Audioplayer.stop()
   }
  }
}
</script>

<style scoped>
#search {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
}
.width40{
  width:30px;
}
.flex4{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  margin-top: 20px;
}
.flex1{

  width: 100%;
}


</style>