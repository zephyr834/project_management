import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import CardEditor from "../CardEditor";
import shortid from "shortid";

class List extends Component {
    state = {
        addingCard: false
    };

    toggleAddingCard = () =>
        this.setState({ addingCard: !this.state.addingCard });

    addCard = async cardText => {
        const { listId, dispatch } = this.props;
        this.toggleAddingCard();

        const cardId = shortid.generate();

        dispatch({
            type: "ADD_CARD",
            payload: { cardText, cardId, listId }
        })
    }

    render() {
        const { list } = this.props;
        const { addingCard } = this.state;

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
                {addingCard ? (
                    <CardEditor
                        onSave={this.addCard}
                        onCancel={this.toggleAddingCard}
                        adding
                    />
                ) : (
                    <div className="cursor-pointer p-2.5 text-gray-500 rounded-b-lg flex items-center hover:bg-[#092d4223] hover:text-[#17394d] hover:underline" onClick={this.toggleAddingCard} >
                        <ion-icon name="add" className="mr-0.5" />Add Card
                    </div>
                )}
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.listsById[ownProps.listId]
});

export default connect(mapStateToProps)(List);