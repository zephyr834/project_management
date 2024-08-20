import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
    render() {
        const { card } = this.props;

        return (
            <div className="relative cursor-pointer bg-white m-1 p-2.5 rounded-1 border border-black/10 shadow-sm text-3.5 break-words min-h-4.5 hover:bg-c-white">
                {card.text}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    card: state.cardsById[ownProps.cardId]
});

export default connect(mapStateToProps)(Card);