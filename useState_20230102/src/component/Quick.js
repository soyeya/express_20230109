import React, { useState } from 'react';

function Quick() {

    const [quickopen, quickSet] = useState(true);

    return (
        <div id = "quick">
            <ul>
                {/* 절대 대입식 불가 */}
                <li onClick={() => {quickSet(!quickopen)}}>온라인상담</li>
                <li onClick={() => {quickSet(!quickopen)}}>온라인예약</li>
                <li onClick={() => {quickSet(!quickopen)}}>FAQ</li>
            </ul>
            <div id="quickBox"  className={ quickopen ? '' : 'show'}>
                <button onClick ={() => {quickSet(!quickopen)}}>닫기</button>
                폼태그넣기
            </div>
        </div>
    );
}

export default Quick;