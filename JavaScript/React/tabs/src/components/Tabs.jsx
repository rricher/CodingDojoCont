import React, { useState } from 'react'

const Tabs = (props) => {

    const [tab, setTab] = useState({
        tabs: props.tabs,
        message: ""
    });

    const onClickHandler = (e, item) => {
        setTab({
            ...tab,
            message: item.content,
        })
    }

    return (
        <div>
            {tab.tabs.map((item, index) => {
                return (
                    <button onClick={ (e) => onClickHandler(e, item) }>{item.label}</button>
                );
            })}
            <div>
                <p>{tab.message}</p>
            </div>
        </div>
    )
}

export default Tabs
