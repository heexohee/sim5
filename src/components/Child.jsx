import React, { useContext } from 'react';
import { FamilyContext } from '../context/FamilyContext';

const style = {
    color: 'red',
    fontWeight: '900'
}

function Child() {
const data = useContext(FamilyContext);
console.log('data', data);

    return (
    <div>난 이집안의 막내에옹<br/>
    하라부지가 우리 집이름은 <span style={style}>{data.houseName}</span>라고 하셨어요.
    <br/>
    게다가 용돈도 <span style={style}>{data.pocketMoney}</span>이나 주셨어용!

    </div>
  );
}

export default Child;
// props가 아니라 context로 부터 데이터를 받아오는 법