import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message:{user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="message-container justifyEnd">
                    <p className="sent-text">{trimmedName}</p>
                    <div className="message-box">
                        <p className="message-text">{ReactEmoji.emojify(text)}</p>
                    </div>
            </div>
        )
        : (
                <div className="message-container justifyStart">
                    <p className="sent-text">{user}</p>
                <div className="message-box">
                        <p className="message-text">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
    )

}

export default Message;