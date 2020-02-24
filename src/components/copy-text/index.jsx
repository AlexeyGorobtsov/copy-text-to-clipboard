import React, {useRef, useState} from 'react';
import {CopyIcon} from "../../svg-icons/copy-icon";

import './style.css';

export function CopyText() {
    const textAreaRef = useRef(null);
    const [isSuccessCopy, setCopySuccess] = useState(false);

    function copyToClipboard() {
        textAreaRef.current.select();
        document.execCommand('copy');
        setCopySuccess(true);
    }

    return (
        <div className={'copy-text'}>
            <input
                ref={textAreaRef}
                value='Lorem ipsum'
                readOnly
                className={'read-only'}
            />
            <div
                className={'wrap-svg-icon'}
                onClick={copyToClipboard}
            >
                <CopyIcon/>
                {isSuccessCopy ? <span className={'copy-success'}>✔</span> : null}
            </div>
        </div>
    )
}