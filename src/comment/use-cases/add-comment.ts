import makeComment from '../entities';
import { makeCommentProps } from '../entities/comment';

import { DbProps } from '../data-access/comments-db';

export interface addCommentProps {
    commentsDb: makeCommentProps
}

export interface makeAddCommentProps {
    commentsDb: DbProps
}


export default function makeAddComment ({
    commentsDb
} : makeAddCommentProps ) {
    return function addComment(commentInfo: makeCommentProps) {
        const comment = makeComment(commentInfo);
        return commentsDb.insert({
            author: comment.getAuthor(),
            text: comment.getText()
        })
    }
}