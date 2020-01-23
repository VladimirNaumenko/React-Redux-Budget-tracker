import React from "react";
import Info from "./Info";
import Input from "./Input";
import Lists from "./Lists";


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {budget, actions} = this.props;
        return (
            <div className="container main-container">
                <div className="manage">
                    <Info
                        budget={budget}
                    />
                    <Input
                        actions={actions}
                        budget={budget}
                    />
                </div>
                <Lists
                    items={budget.items}
                    actions={actions}
                />
            </div>
        );
    }
}


export default App;
