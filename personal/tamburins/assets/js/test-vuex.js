const store = new Vuex.Store({
    state: {
        activeMenu: "", // 현재 활성화된 메뉴 이름
    },
    mutations: {
        setActiveMenu(state, menuName) {
            state.activeMenu = menuName;
        },
    },
});

export default store;