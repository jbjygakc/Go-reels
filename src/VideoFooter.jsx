import React from 'react'
import "./VideoFooter.css"
import { Avatar, Button } from "@material-ui/core"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function VideoFooter(props) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <Avatar src={props.avatarsrc} />
                <h3>
                    {props.channel} • <Button>Follow</Button>
                </h3>
            </div>
            <div className='videoFooter_ticker'>
                <MusicNoteIcon
                    className='videoFooter_icon' />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <h1>{props.song}</h1>

                        </>
                    )}
                </Ticker>
                <div className='videoFooter_actions'>
                    <div className='videoFooter_actionsLeft'>
                        <FavoriteIcon fontSize="large" />
                        <ModeCommentIcon fontSize="large" />
                        <SendIcon fontSize="large" />
                        <MoreHorizIcon fontSize="large" />
                    </div>
                    <div className='videoFooter_actionsRight'>
                        <div className="videoFooter_stat">
                            <FavoriteIcon />
                            <p>{props.likes}</p>
                        </div>
                        <div className="videoFooter_stat">
                            <ModeCommentIcon />
                            <p>{props.shares}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter