import { Avatar } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import db from './firebase';
import './SidebarChat.css'

function SidebarChat({id, name, addNewChat }) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter the name for the chat room");

        if(roomName){
            db.collection('room').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat_info'>
                <h2> {name} </h2>
                <p> Last Message </p>
            </div>
        </div>
    ): (
        <div className='sidebarChat' onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
