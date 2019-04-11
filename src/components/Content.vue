<template class="content">
  <div>
    <p>{{ msg }}</p>
     <IPA msg="The best IPAS in the world"/>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IPA from '@/components/IPA.vue' // @ is an alias to /src


@Component({
  components: {
    IPA
  }
})
export default class Content extends Vue {
  @Prop() private msg!: string
}
</script>

