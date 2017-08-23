<template>
   <div class="s_BPLbg">
      <partHeader :hImg='hImg' :hCts='hCts' :hMoreCts='hMoreCts'></partHeader>
      <div class="s_BPLbg_table">
         <div>
            <div>时间</div>
            <div>战队</div>
         </div>
         <div>
            <div>
               <p>4-27</p>
               <p> 17:00</p>
               <p>即将开始</p>
            </div>
            <ul class="s_BPLbg_table_team">
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
               <li>
                  <img src="./img/team.png">
                  <div>VR</div>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
<script>
import partHeader from '../partHeader/partHeader';
export default {
   data () {
      return {
         hImg: '2',
         hCts: 'BPL赛程',
         hMoreCts: '更多赛程'
      };
   },
   components: {
      partHeader
   },
   props: [],
   methods: {
   },
   mounted () {
   }
};
</script>
<style lang="less">
@import url(BPL.less);
@import url(../../../../common/css/mixin.less);
</style>
