import makeAddComment from './add-comment';
import commentsDb from '../data-access';

const addComment = makeAddComment({commentsDb});

export default addComment;