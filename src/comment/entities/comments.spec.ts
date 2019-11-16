
import 'mocha';
import sinon from 'sinon';
import { expect } from 'chai';

import buildMakeComment, {deletedAuthor, deletedText} from './comment';
import makeComment from '.';

describe('Comment Test', () => {

    beforeEach(() => {
        const makeSource  = sinon.stub();
        const sanitize = (text: string) => {
            return text + "sanitized";
        };
        const makeComment = buildMakeComment({ makeSource, sanitize })
    })

    it('should create a comment', () => {
        const comment = makeComment({
            author: 'edwin',
            source: {source: "source"},
            text: 'texto'
        })
        expect(comment.getAuthor()).to.equal("edwin");
        expect(comment.getText()).to.equal("texto sanitized");
    });

    it('should mark comment as deleted', () => {
        const comment = makeComment({
            author: 'edwin',
            source: {source: "source"},
            text: 'texto'
        })
        comment.markDeleted();
        expect(comment.getAuthor()).to.equal(deletedAuthor);
        expect(comment.getText()).to.equal(deletedText);
    })

})