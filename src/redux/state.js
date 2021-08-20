
let store={
  _state:{

},
  _callSubscriber () {
 console.log('shhh');},

  getState(){
    return this._state;},
  subscribe  (observer) {
      this._callSubscriber=observer;
    },

  dispatch(action){
    if(action.type==='Сalculate-Winner'){
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (action.squares[a] && action.squares[a] === action.squares[b] && action.squares[a] === action.squares[c]) {
          return action.squares[a];
        }
      }
      return null;
     this._callSubscriber(this._state);
    }

},

}


export default store;
window.state=store;
