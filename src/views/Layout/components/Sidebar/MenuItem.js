import Item from './Item'

const MenuItem = {
  name: 'MenuItem',
  components: { Item },
  props: {
    basePath: {
      type: String,
      default: ''
    },
    route: {
      type: Object,
      required: true
    }
  },
  render() {
    const route = this.route
    const showMenu = !route.hidden && route.children
    return (
      showMenu && (
        <el-menu-item index={route.path} route={{ path: route.path }}>
            <Item icon="el-icon-menu" title={route.name}></Item>
        </el-menu-item>
      )
    )
  }
}

export { MenuItem as default }
