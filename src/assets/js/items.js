import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'items',
  props: ['inventory', 'addToCart'],
  data () {
    return {
      href: this.$route.params.href,
      items: require('../items.json')
    }
  },
  computed: {
    cartIsValid () {
      return this.inventory.color && this.inventory.qty && this.inventory.size
    }
  },
  methods: {
    changeImg (index) {
      this.items[this.href].src = index
    }
  },
  components: {
    SideMenu
  }
}
