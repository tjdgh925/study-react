import { createStore } from 'redux';

//createStore는 스토어를 만들어주는 함수입니다.
//리액트 프로젝트에서는 단 하나의 스토어만 생성합니다.

//리덕스에서 관리 할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

//액션 타임 정의
//액션 타입은 주로 대문자로 작성합니다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수 정의
//액션 생성함수는 주로 camelCase로 작성합니다.
function increase() {
    return{
        type: INCREASE
    };
}

//화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
//이렇게 쓰는 것을 추천합니다.  
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

//리듀서 만들기
//위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
//새로운 상태를 만드는 함수를 만들어봅시다.
//주의 :: 리듀서에서는 불변성을 꼮!! 지켜주어야 합니다!!

function reducer(state = initialState, action) {
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1 
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }   
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: 'Wow'}));