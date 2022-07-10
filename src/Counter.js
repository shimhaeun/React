import { useReducer } from "react";

function reducer(state, action) { // state는 현재 가리키오 있는 상태, dispatch는 액션을 발생시키는 함수. dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값 넣어주면 리듀서 함수 호출되는 구조.
  // useReducer 사용 시 가장 큰 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value : state.value + 1 };
      case 'DECREMENT':
        return { value : state.value - 1 };
        default:
          // 아무것도 해당되지 않을 때 기존 상태 반환
          return state;
        }
      }
      
      const Counter = () => {
        const [state, dispatch] = useReducer(reducer, { value: 0 });
        
        return (
          <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
    </div>
  );
};

export default Counter;
