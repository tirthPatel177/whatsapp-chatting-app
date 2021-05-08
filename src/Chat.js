import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@material-ui/core"
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from "./StateProvider";


function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(()=>{
        if(roomId){
            db.collection('room').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });

            db.collection('room').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
  
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('room').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return ( 
        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {/* <p className="chat_message"> Hey Guys </p> */} 
                
                {/* <p className={`chat_message  ${true && 'chat_receiver'}`}>
                <span className="chat_name">Tirth Patel </span>
                 Hey Guys 
                 <span className="chat_timestamp chat_receiver"> 7:07 AM </span>
                </p> */}

                {messages.map(message => (
                    <p className={`chat_message ${ message.name === user.displayName && 'chat_receiver'}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div> 

            <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
            <button type="submit" onClick={sendMessage}> Send a Message</button>
            </form>
            <MicIcon />
            </div>

        </div>
    )
}

export default Chat
