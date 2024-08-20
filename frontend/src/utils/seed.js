import shortid from "shortid";

// eslint-disable-next-line import/no-anonymous-default-export
export default store => {

    const listTotal = 3;
    const cardTotal = 3;
    let cardCount = 1;

    for (let i = 0; i < listTotal; i++) {
        console.log("Insert list #" + i);
        const newListId = shortid.generate();
        store.dispatch({
            type: "ADD_LIST",
            payload: { listId: newListId, listTitle: ("List #" + (i+1) ) }
        });

        for (let j = 0; j < cardTotal; j++) {
            store.dispatch({
                type: "ADD_CARD",
                payload: {
                listId: newListId,
                cardId: shortid.generate(),
                cardText: "Card #" + cardCount
                }
            });

            cardCount += 1;
        }
    }

};
