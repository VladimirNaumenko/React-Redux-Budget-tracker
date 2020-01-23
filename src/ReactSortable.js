import SortableList from "react-sortable-list";
import ReactDOM from "react-dom";
import React, {Component} from "react";

export default class TestComponent extends Component {

    render() {
        let colors = ["Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"];

        return (
            <SortableList data={this.props.items} />
            // <ul className="statistics-list">
            //     {this.props.items && this.props.items.length > 0 ? this.props.items.map((elem, index) => {
            //
            //             if (elem.type === "inc") {
            //                 return (
            //                     <li className="income-item" key={index}>
            //                         <div className="item-details">
            //                             <div>
            //                                 <span className="">{elem.value}</span>
            //                             </div>
            //                             <button className="btn-delete"
            //                                     onClick={() => this.props.actions.deleteItem(elem.id)}>
            //
            //                             </button>
            //                         </div>
            //                         <div className="time-container">
            //                             <span className="span-description">{elem.description}</span>
            //                             <span className="span-description">{elem.category}</span>
            //
            //                         </div>
            //                     </li>
            //                 );
            //             }
            //         }
            //     ) : null}
            // </ul>
        );
    }
};