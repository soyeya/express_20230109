import React, {useState} from 'react';

//변수로 쓰는 경우 

const Notice = (props) => {

     const [noticels, noticeSet] = useState(['img1' , 'img2', 'img3']);
     const [number , setNumber] = useState(0);

    //  let number = 0;
//...의 의미 -> 기호를 빼라! ([]의 경우 []을 빼주고, {}의 경우 {}를 빼라!)
    return (
        <div>
            <h3>{props.title}</h3> 
            {/* _ 타입은 동일하게 바꾸어야 한다. [array]는 [array]로 {오브젝트}는 {오브젝트}로! */}
            {/* <button 
             onClick={ () => { 
             const newNoticels = [ ...noticels, '새로운이미지']
             noticeSet(newNoticels);
            //  newNoticels값이 메소드값에 들어가므로 계속해서 랜더링할 때마다 새로운이미지가 추가됨
            }
              }>후기</button> */}
              <button 
             onClick={ () => { 
                     
                setNumber(number + 1);
                const newNoticels = [ '새로운이미지' + number, ...noticels]
             noticeSet(newNoticels);
            }
              }>후기</button>
              {/* 새로운 이미지 업데이트를 늘 새롭게하는 경우 _number의 경우도 useState를 거치지 않으면 증감식이 되지 않음_ const에 따로 담아서 useState를 사용할것!*/}
              
            <ul>
             {

                 noticels.map((item, index) => {

                    return(

                      <li>{item}</li>

                    )
                 })
             }
            </ul>
        </div>
    );
}

export default Notice;