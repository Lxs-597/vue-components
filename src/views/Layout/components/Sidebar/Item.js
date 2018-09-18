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
    return (
      <div>
        {icon && (<i class={icon}/>)}
        {title && (<span slot="title">{title}</span>)}
      </div>
    )
  }
}

export { Item as default }
