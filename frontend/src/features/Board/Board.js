import React, { Component } from "react";
import { connect } from "react-redux";
import List from '../List/List';

class Board extends Component {
    render() {
        const { board } = this.props;

        return (
            <div className="h-[92%] flex overflow-x-auto">
                {board.lists.map((listId, index) => {
                    return <List listId={listId} key={listId} index={index} />;
                })}
            </div>
        );
        
    }
}

const mapStateToProps = state => ({ board: state.board });

export default connect(mapStateToProps)(Board);