import React from "react";
import * as Helpers from "./constants/Helpers";
import {connect} from "react-redux";


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: Helpers.types.income,
            categoryId: 0,
            value: 0,
            description: ""
        };
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({categoryId: Number(event.target.value)});
    }

    handleValueChange(event) {
        if (this.isNumber(event.target.value) || !event.target.value) {
            this.setState({value: event.target.value ? parseFloat(event.target.value) : 0});
        }
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleInfo(event) {
        event.preventDefault();
        this.props.actions.addItem({...this.state});
        this.setState({
            type: Helpers.types.income,
            categoryId: 0,
            value: 0,
            description: ""
        });
    }


    isNumber(n) {
        return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }

    render() {
        return (
            <section className="manage-budget">
                <form className="manage-budget-content" onSubmit={this.handleInfo}>
                    <div className="manage-budget-content--upper">

                        <select id="selector"
                                className="dropdown"
                                onChange={this.handleTypeChange}
                                value={this.state.type}
                        >
                            <option value="inc">Income</option>
                            <option value="exp">Expenses</option>
                        </select>
                        <select id="category"
                                className="dropdown dropdown--category"
                                onChange={this.handleCategoryChange}
                                value={this.state.categoryId}
                        >
                            <option value="0">Select category</option>
                            {this.props.budget.categories.map((el,index) =>
                                    // написать проверочку
                            <option value={el.id} key={index}>{el.title}</option>
                            )}

                        </select>
                        <input
                            id="input-value"
                            type="text"
                            placeholder="Value"
                            className={`input input--value ${this.isNumber(this.state.value) ? "" : "error"}`}
                            value={this.state.value.toString()}
                            onChange={this.handleValueChange}
                        />
                    </div>
                    <div className="manage-budget-content--lower">
                        <input
                            id="input-description"
                            type="text"
                            placeholder="Add description"
                            className="input input--description"
                            value={this.state.description}
                            minLength="4"
                            maxLength="20"
                            onChange={this.handleDescriptionChange}
                        />
                        <button id="btn-submit" type="submit" className="btn btn-submit">
                            Submit
                        </button>
                    </div>

                </form>

            </section>
        );
    }
}
