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
    title && vnodes.push(<span slot="title">{title}</span>)

    return vnodes

    // return (
    //   <div>
    //     {icon && (<i class={icon}/>)}
    //     {title && (<span slot="title">{title}</span>)}
    //   </div>
    // )
  }
}

export { Item as default }
