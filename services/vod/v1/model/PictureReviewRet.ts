import { ReviewDetail } from './ReviewDetail';


export class PictureReviewRet {
    public suggestion?: PictureReviewRetSuggestionEnum | string;
    public offset?: number;
    public url?: string;
    public politics?: Array<ReviewDetail>;
    public terrorism?: Array<ReviewDetail>;
    public porn?: Array<ReviewDetail>;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withSuggestion(suggestion: PictureReviewRetSuggestionEnum | string): PictureReviewRet {
        this['suggestion'] = suggestion;
        return this;
    }
    public withOffset(offset: number): PictureReviewRet {
        this['offset'] = offset;
        return this;
    }
    public withUrl(url: string): PictureReviewRet {
        this['url'] = url;
        return this;
    }
    public withPolitics(politics: Array<ReviewDetail>): PictureReviewRet {
        this['politics'] = politics;
        return this;
    }
    public withTerrorism(terrorism: Array<ReviewDetail>): PictureReviewRet {
        this['terrorism'] = terrorism;
        return this;
    }
    public withPorn(porn: Array<ReviewDetail>): PictureReviewRet {
        this['porn'] = porn;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PictureReviewRetSuggestionEnum {
    BLOCK = 'block',
    PASS = 'pass',
    REVIEW = 'review'
}
