import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

class List extends Component {
    render() {
        const { list } = this.props;

        return (
            <div className="bg-c-white flex-shrink-0 w-[272px] h-fit m-2.5 mr-0 rounded-2.5 border border-black/10">
                <div className="cursor-pointer p-2.5 break-words" onClick={this.toggleEditingTitle}>
                    {list.title}
                </div>

                {list.cards &&
                list.cards.map((cardId, index) => (
                    <Card
                        key={cardId}
                        cardId={cardId}
                        index={index}
                        listId={list._id}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.listsById[ownProps.listId]
});

export default connect(mapStateToProps)(List);