const MenuItem = {
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
    console.log(this)
    return (
      <span style={{ color: '#fff' }}>{ this.basePath }</span>
    )
  }
}

export { MenuItem as default }
