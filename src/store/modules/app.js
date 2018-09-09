const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
const TOGGLE_DEVICE = 'TOGGLE_DEVICE'

const app = {
  state: {
    device: 'desktop',
    sidebar: {
      isOpened: true,
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.isOpened = !state.sidebar.isOpened
    },
    CLOSE_SIDEBAR: (state) => {
      state.sidebar.isOpened = false
    },
    OPEN_SIDEBAR: (state) => {
      state.sidebar.isOpened = true
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit(TOGGLE_SIDEBAR)
    },
    closeSidebar: ({ commit }) => {
      commit(CLOSE_SIDEBAR)
    },
    openSidebar: ({ commit }) => {
      commit(OPEN_SIDEBAR)
    },
    toggleDevice: ({ commit }, device) => {
      commit(TOGGLE_DEVICE, device)
    }
  }
}

export default app