import React from "react";

class Word extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { en, vn } = this.props.spot;
        const { onRemove } = this.props;
        return (
            <div>
                <p>{en}</p>
                <h3>{vn}</h3>
                <button onClick={onRemove}>remove</button>
            </div>
        )
    }
}

export default Word;