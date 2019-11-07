export interface insertProps {
    author: string,
    text: string
}

export interface DbProps {
    insert: (commentInfo: insertProps) => void
}

export interface makeCommentsDbProps {
    makeDb: () => DbProps
}

export default function makeCommentsDb ({ makeDb } : makeCommentsDbProps ) {
    return {
        insert
    }

    function insert(commentInfo: insertProps) {
        const db = makeDb();
        db.insert(commentInfo);
    }

}