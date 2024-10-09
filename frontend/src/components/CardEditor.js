import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

class CardEditor extends Component {
    state = {
        text: this.props.text || ""
    };

    handleChangeText = event => this.setState({ text: event.target.value });

    onEnter = e => {
        const { text } = this.state;

        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.onSave(text);
        }
    };

    render() {
    const { text } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;

    return (
        <div>
            <div className="px-[5px]">
                <TextareaAutosize
                    autoFocus
                    className="w-[100%] border-none resize-none outline-none text-3.5 min-h-4.5 hover:bg-slate-100 p-2.5"
                    placeholder="Enter the text for this card..."
                    value={text}
                    onChange={this.handleChangeText}
                    onKeyDown={this.onEnter}
                />
            </div>
            <EditButtons
                handleSave={() => onSave(text)}
                saveLabel={adding ? "Add card" : "Save"}
                handleDelete={onDelete}
                handleCancel={onCancel}
            />
        </div>
        );
    }
}

export default CardEditor;