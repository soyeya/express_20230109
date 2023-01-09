import React , { useEffect , useState } from 'react'; //서버구동시 강제로 터뜨려야하기때문에 useEffect,useState호출
import axios from 'axios'; //node랑 접속하기 위해서 axios 불러옴


function Popup() {

    const [ nodejson, updateNode ] = useState('아직 데이터 안옴');

    useEffect( () => {
        axios.get('http://localhost:5000/contact') //'주소'로 가서 데이터 가지고 와!
        .then((data) => {  //응답자체를 데이터라고 하자!_ 내가 지어서 쓸 수 있음
            console.log(data);
            updateNode(data.data.message) //data(지어서쓰는이름)안에 data의 메세지를 가져옴 
        })
    }, []) //첫번째 자리에 화살표함수, 두번째 자리에 dependenci가 들어옴

    return (
       
            <div>{nodejson}</div>
       
    );
}

export default Popup;