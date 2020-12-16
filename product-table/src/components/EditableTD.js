import React, { Component } from 'react';

class EditableTD extends Component {
    constructor(props) {
        super(props);
        this.state = {editable:false};
    }

    handleClick = () => {
        this.setState({ editable: true});

    };

    handleBlur = () => {
        this.setState({ editable: false});
    };

    render() {
        const editable = this.state.editable;
        const value = this.props.value;
        let span;
        if(value <= 10 && this.props.id === 'quantity') {
            span = <span style={{color: 'red'}} onClick={this.handleClick}>{value}</span>;
        } else {
            span = <span onClick={this.handleClick}>{value}</span>;
        }
        return (
            <td>

            {editable 
                ? <input autoFocus  id={this.props.id} type="text" pattern="[0-9]*" value={value} onChange={this.props.onInputChange} onBlur={this.handleBlur} />
                : span
            }
            </td>
        );
    }
}

export default EditableTD;