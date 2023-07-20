import { PictureReviewRet } from './PictureReviewRet';
import { TextReviewRet } from './TextReviewRet';


export class ReviewInfo {
    public suggestion?: ReviewInfoSuggestionEnum | string;
    public text?: TextReviewRet;
    public cover?: Array<PictureReviewRet>;
    public video?: Array<PictureReviewRet>;
    private 'exec_desc'?: string;
    private 'review_status'?: string;
    public constructor(reviewStatus?: string) { 
        this['review_status'] = reviewStatus;
    }
    public withSuggestion(suggestion: ReviewInfoSuggestionEnum | string): ReviewInfo {
        this['suggestion'] = suggestion;
        return this;
    }
    public withText(text: TextReviewRet): ReviewInfo {
        this['text'] = text;
        return this;
    }
    public withCover(cover: Array<PictureReviewRet>): ReviewInfo {
        this['cover'] = cover;
        return this;
    }
    public withVideo(video: Array<PictureReviewRet>): ReviewInfo {
        this['video'] = video;
        return this;
    }
    public withExecDesc(execDesc: string): ReviewInfo {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string  | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc(): string | undefined {
        return this['exec_desc'];
    }
    public withReviewStatus(reviewStatus: string): ReviewInfo {
        this['review_status'] = reviewStatus;
        return this;
    }
    public set reviewStatus(reviewStatus: string  | undefined) {
        this['review_status'] = reviewStatus;
    }
    public get reviewStatus(): string | undefined {
        return this['review_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReviewInfoSuggestionEnum {
    BLOCK = 'block',
    PASS = 'pass',
    REVIEW = 'review'
}
