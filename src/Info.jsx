import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createConnect} from "react-redux/lib/connect/connect";
import BudgetReducer from "./reducers/BudgetReducer";

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.calculateMoney = this.calculateMoney.bind(this);
    }

    calculateMoney(arr, type) {
        const arrayByType = arr.filter(function (item) {
            return item.type === type;
        });
        return arrayByType.reduce((sum, item) => sum + item.value, 0);
    }

    render() {
        const totalIncome = this.calculateMoney(this.props.budget.items, "inc");
        const totalExpense = this.calculateMoney(this.props.budget.items, "exp");
        const total = totalIncome - totalExpense;

        return (
            <header className="header">
                <div className="header-content">
                    <div className="budget-details">
                        <div className="budget-block budget-block--income">
                            <span className="budget-block-text">income</span>
                            <span className="budget-block-value">+{totalIncome}</span>
                        </div>
                        <div className="budget-block budget-block--expense">
                            <span className="budget-block-text">expenses</span>
                            <div>
                                <span className="budget-block-value">-{totalExpense}</span>
                            </div>
                        </div>
                    </div>
                    <h1 className="header-budget">{total}</h1>
                </div>
            </header>
        );
    }
}
