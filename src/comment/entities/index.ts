import buildMakeComment from './comment';
import makeSource from '../../source/entities';
import sanitize from '../../utils/sanitize/sanitize';

const makeComment = buildMakeComment({makeSource, sanitize})

export default makeComment;