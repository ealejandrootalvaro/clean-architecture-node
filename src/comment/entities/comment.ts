import { makeSourceType, makeSourceProps } from '../../source/entities/source';

export interface buildMakeCommentProps {
    makeSource: makeSourceType,
    sanitize: (text: string) => string
}

export interface makeCommentProps {
    author: string,
    source: makeSourceProps,
    text: string
}

export default function buildMakeComment({makeSource, sanitize} : buildMakeCommentProps ) {
    return function makeComment({
        author,
        source,
        text
    } : makeCommentProps ) {
        
        const validSource = makeSource(source);
        const sanitizedText = sanitize(text).trim();

        return {
            getAuthor: () => author,
            getSource: () => validSource,
            getText: () => sanitizedText
        }

    }
}