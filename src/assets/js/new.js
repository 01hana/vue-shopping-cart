import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'new',
  data () {
    return {
      items: []
    }
  },
  components: {
    SideMenu
  },
  mounted () {
    const data = require('../items.json')
    this.items = data
    console.log(data)
  }
}
