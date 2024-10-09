import React from "react";

const EditButtons = ( { handleSave, saveLabel, handleDelete, handleCancel }) => (
    <div className="flex">
        <div 
            tabIndex="0" 
            className="cursor-pointer shadow-[0_1px_0_0_#3f6f21] w-fit mx-1.5 my-2.5 px-3 py-1.5 rounded-md text-white font-bold outline-none bg-[#5aac44]"
            onClick={handleSave}
        >
            {saveLabel}
        </div>
        {handleDelete && ( 
            <div 
                tabIndex="0" 
                className="cursor-pointer shadow-[0_1px_0_0_#3f6f21] w-fit mr-1.5 my-2.5 px-3 py-1.5 rounded-md text-white font-bold outline-none bg-[#EA2525]"
                onClick={handleDelete}
            >
                Delete
            </div>
        )}
        <div tabIndex="0" onClick={handleCancel} className="hover:opacity-100 cursor-pointer my-2.5 flex items-center text-xl opacity-50 outline-none" >
            <ion-icon name="close" />
        </div>
    </div>
);

export default EditButtons;