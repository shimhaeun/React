import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setnickname] = useState('');

    // 뒷정리
    useEffect(()=> {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);

    // // 특정 값이 업데이트될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log(name);
    //     }, [name]);

    // // useEffect : 리액트 컴포넌트가 렌더링될 때마다 특정 작업 수행하도록 설정할 수 있는 Hook
    // useEffect(() => {
    //     // 마운트 될 때만 실행하고 싶을 때 -> 두 분째 파라미터로 비어있는 배열 넣어주기
    //     console.log('마운트 될 때만 실행!');
    // }, [])
        // console.log('렌더링 완료!');
        // console.log({
        //     name,
        //     nickname
        // });
    // });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setnickname(e.target.value);
    };

    return (
        <div>
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
        <div>
            <b>이름:</b>{name}
        </div>
        <div>
            <b>닉네임:</b> {nickname}
        </div>
        </div>
        </div>
    );
};
export default Info;