import React from 'react';

const style = {
    color: 'red',
    fontWeight: '900'
}

function Child({houseName, pocketMoney}) {

    return (
    <div>난 이집안의 막내에옹<br/>
    하라부지가 우리 집이름은 <span style={style}>{houseName}</span>라고 하셨어요.
    <br/>
    게다가 용돈도 <span style={style}>{pocketMoney}</span>이나 주셨어용!

    </div>
  );
}

export default Child;