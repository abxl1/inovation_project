import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token"); // 토큰 가져오기
const storedRole = localStorage.getItem("role");

const initialState = {
  isLogin: !!storedToken,
  role : storedRole || null,
};

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    loginOn: (state, action) => {
      state.isLogin = true;
    },
    loginOff: (state, action) => {
        state.isLogin = false;
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { loginOn, loginOff } = isLoginSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default isLoginSlice.reducer;