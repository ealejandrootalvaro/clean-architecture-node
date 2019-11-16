import { makeSourceType, makeSourceProps } from '../../source/entities/source';
import { sanitizeType } from '../../utils/sanitize/sanitize';

export interface buildMakeCommentProps {
    makeSource: makeSourceType,
    sanitize: sanitizeType
}

export interface makeCommentProps {
    author: string,
    source: makeSourceProps,
    text: string
}

export const deletedText = '.xX This comment has been deleted Xx.';
export const deletedAuthor = 'deleted'

export default function buildMakeComment({makeSource, sanitize} : buildMakeCommentProps ) {
    return function makeComment({
        author,
        source,
        text
    } : makeCommentProps ) {
        
        const validSource = makeSource(source);
        let sanitizedText = sanitize(text).trim();

        return {
            getAuthor: () => author,
            getSource: () => validSource,
            getText: () => sanitizedText,
            markDeleted: () => {
                sanitizedText = deletedText;
                author = deletedAuthor
            }
        }

    }
}