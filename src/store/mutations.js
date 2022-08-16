/* 
用于更新state信息 
*/
export default {
  saveUserName (state, username) {
    state.username = username;
  },
  saveCartCount (state, count) {
    state.count = count
  }
}