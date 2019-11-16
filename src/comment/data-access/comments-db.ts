export interface CommentDbProps {
    author: string,
    text: string
}

export interface DbProps<T> {
    insert: (commentInfo: T) => void
}

export interface makeCommentsDbProps {
    makeDb: () => DbProps<CommentDbProps>
}

export default function makeCommentsDb ({ makeDb } : makeCommentsDbProps ) {
    return {
        insert
    }

    function insert(commentInfo: CommentDbProps) {
        const db = makeDb();
        db.insert(commentInfo);
    }

}