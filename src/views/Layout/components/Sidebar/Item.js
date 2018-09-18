const Item = {
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  render(h, ctx) {
    const { icon, title } = ctx.props
    const vnodes = []

    icon && vnodes.push(<i class={icon}/>)
    title && vnodes.push(<span>{title}</span>)

    return vnodes
  }
}

export { Item as default }
