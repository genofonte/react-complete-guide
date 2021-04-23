import './ExpenseDate.css';

function ExpenseDate( props ) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const yaar = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{ month }</div>
            <div className="expense-date__day">{ day }</div>
            <div className="expense-date__day">{ yaar }</div>
        </div>
    )
}

export default ExpenseDate;