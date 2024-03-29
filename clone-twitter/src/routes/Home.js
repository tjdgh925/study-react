import { dbService, storageService } from "fbase";
import Tweet from "components/Tweets";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";

const Home = ({userObj}) => {
    console.log(userObj);
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    useEffect(() => {
        dbService.collection("tweets").onSnapshot((snapshot) =>{
            const tweetArryay = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(), 
            }));
            setTweets(tweetArryay);
        });
    }, []);
    const onSubmit = async (e) =>{
        e.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const tweetObj ={
                text: tweet,
                createdAt : Date.now(),
                creatorId: userObj.uid,
                attachmentUrl,
        };
        await dbService.collection("tweets").add(tweetObj);
        setTweet("");
        setAttachment("");
    };

    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        setTweet(value);
    };

    const onFileChange = (e) => {
        const {
            target:{files},
        } = e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: {result},
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => { setAttachment("") }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={tweet}
                    onChange={onChange} 
                    type="text" 
                    placeholder="What's on your mind" 
                    maxLength={120} 
                />
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={onFileChange} 
                />
                <input 
                    type="submit"
                    value="Tweet" 
                />
                {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
                )}
            </form>
            <div>
                {tweets.map((tweet) =>
                (
                    <Tweet 
                        key={tweet.id}
                        tweetObj={tweet} 
                        isOwner={tweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};
export default Home;