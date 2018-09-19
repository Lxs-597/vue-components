import path from 'path'
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
  data() {
    return {
      onlyChild: null
    }
  },
  render() {
    const route = this.route
    const showMenu = !route.hidden && route.children
    let vnodes = null

    if (showMenu) {
      const showMenuItem = this.hasOnlyOneChild(route.children) && !this.onlyChild.children
      if (showMenuItem) {
        console.info('onlyChild', this.onlyChild)
        vnodes = (
          <el-menu-item index={this.resolvePath(this.onlyChild.path)} route={{ path: this.resolvePath(this.onlyChild.path) }}>
            <Item icon="el-icon-menu" title={route.meta.title}></Item>
          </el-menu-item>
        )
      } else {
        vnodes = (
          <el-submenu index={route.name || route.path}>
            <template slot="title">
              <Item icon="el-icon-menu" title={route.meta.title}></Item>
            </template>

            { !route.hidden && route.children.map(child => (
              (child.children && child.children.length)
                ? (
                    <menu-item
                      route={child}
                      basePath={this.resolvePath(child.path)}
                      key={this.resolvePath(child.path)}/>
                  )
                : (
                    <el-menu-item
                      index={this.resolvePath(child.path)}
                      route={{ path: this.resolvePath(child.path) }}
                      key={this.resolvePath(child.path)}>
                      <Item icon="el-icon-menu" title={child.meta.title}></Item>
                    </el-menu-item>
                  )
            )) }

          </el-submenu>
        )
      }
    }
    return vnodes
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
    hasOnlyOneChild(children) {
      const showsChildren = children.filter(child => {
        return !child.hidden && (this.onlyChild = child)
      })

      return showsChildren.length === 1
    }
  }
}

export { MenuItem as default }
