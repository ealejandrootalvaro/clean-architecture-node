import makeCommentsDb, {CommentDbProps} from './comments-db';

function makeDb() {

    let comments : Array<CommentDbProps> = [];
    
    return {
        insert
    }

    function insert(commentInfo: CommentDbProps) {
        const newComnent = { ...commentInfo };
        comments.push(newComnent);
    }
}

const commentsDb = makeCommentsDb({makeDb});

export default commentsDb;