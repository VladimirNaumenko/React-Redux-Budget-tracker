import React from "react";

export default class Lists extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        return (
            <section className="statistics">
                <div className="statistics-content">
                    <div className="statistics-box">
                        <h2 className="statistics-header statistics-header--income">Income:</h2>
                        <ul className="statistics-list">
                            {this.props.items && this.props.items.length > 0 ? this.props.items.map((elem, index) => {
                                    if (elem.type === "inc") {
                                        return (
                                            <li className="income-item" key={index}>
                                                <div className="item-details">
                                                    <div>
                                                        <span className="">{elem.value}</span>
                                                    </div>
                                                    <button className="btn-delete"
                                                            onClick={()=>this.props.actions.deleteItem(elem.id)}>

                                                    </button>
                                                </div>
                                                <div className="time-container">
                                                    <span className="span-description">{elem.description}</span>
                                                    <span className="span-description">{elem.category}</span>

                                                </div>
                                            </li>
                                        );
                                    }
                                }
                            ) : null}

                        </ul>
                    </div>
                    <div className="statistics-box">
                        <h2 className="statistics-header statistics-header--expense">Expenses:</h2>
                        <ul className="statistics-list">
                            {this.props.items && this.props.items.length > 0 ? this.props.items.map((elem, index) => {
                                    if (elem.type === "exp") {
                                        return (
                                            <li className="income-item" key={index}>
                                                <div className="item-details">
                                                    <div>
                                                        <span className="">{elem.value}</span>
                                                    </div>
                                                    <button className="btn-delete"
                                                            onClick={()=>this.props.actions.deleteItem(elem.id)}>

                                                    </button>
                                                </div>
                                                <div className="time-container">
                                                    <span className="span-description">{elem.description}</span>
                                                    <span className="span-description">{elem.category}</span>

                                                </div>
                                            </li>
                                        );
                                    }
                                }
                            ) : null}
                        </ul>
                    </div>
                    {/*<div className="statistics-box">*/}
                    {/*    <h2 className="statistics-header statistics-header--expense">category will be тут:</h2>*/}

                    {/*    <ul className="statistics-list">*/}
                    {/*       <li></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </section>
        );
    }
}