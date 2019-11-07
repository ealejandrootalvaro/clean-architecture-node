import makeCommentsDb, {insertProps} from './comments-db';

function makeDb() {

    let comments : Array<insertProps> = [];
    
    return {
        insert
    }

    function insert(commentInfo: insertProps) {
        const newComnent = { ...commentInfo };
        comments.push(newComnent);
    }
}

const commentsDb = makeCommentsDb({makeDb});

export default commentsDb;