import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from './AsyncAction';

export interface employee {
  name: String;
  age: String;
  address: String;
  city: String;
}
const initialState = {
  employee: [
    {
      name: '',
      age: '',
      address: '',
      city: '',
    },
  ],
  token: '',
  userEmail:''
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addingEmployee: (state, {payload}) => {
      console.log('employee', payload);
      state.employee.push(payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.pending, (state, {payload}) => {
      console.log('pending');
    });
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      state.token = payload?.result;
      state.userEmail=payload?.username;
      // Toast.success('successful login');
    });
    builder.addCase(userLogin.rejected, (state, {payload}) => {
      console.log('rejected',);

    });
  },
});
export const {addingEmployee} = userSlice.actions;
export default userSlice.reducer;
