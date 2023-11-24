import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) =>{

    const [title, setTitle] = useState(props.title);
    // title = 관리되는 해당 값에 대한 포인터
    // setTitle = 나중에 새 품명을 설정할 때 호출할 함수
    // 일반적으로 첫 번째 인자를 이용하여 함수 이름을 만든다.

    const clickHandler = () =>{
        setTitle('Updated');
        console.log(title);
    }

    return (
        <Card className= "expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;