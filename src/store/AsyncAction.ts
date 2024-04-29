import {createAsyncThunk} from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk('userLogin', async data => {
  try {
    console.log('api', data);

    const user = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await user.json();
    console.log('result', result);
    if (result.token) {
      data.navigation.navigate('Home');
    }
    const newResult={
      result,
      username:data.username
    }
    return newResult;
  } catch (error) {
    console.log(error);
  }
});
