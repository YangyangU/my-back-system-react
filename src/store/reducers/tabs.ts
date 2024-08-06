import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        isCollapse: false,
        tagList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
            },
        ],
        currentTab: '/', // 当前激活的tab
    },
    reducers: {
        collapseMenu: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        setTagList: (state, { payload }) => {
            if (payload.name !== 'home') {
                if (
                    state.tagList.findIndex(
                        (item) => item.name === payload.name,
                    ) === -1
                )
                    state.tagList = [...state.tagList, payload];
            }
        },
        setCurrentTab: (state, { payload }) => {
            state.currentTab = payload;
        },
    },
});

export const { collapseMenu, setTagList, setCurrentTab } = tabsSlice.actions;

export default tabsSlice.reducer;
