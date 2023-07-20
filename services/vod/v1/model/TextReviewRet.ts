

export class TextReviewRet {
    public suggestion?: TextReviewRetSuggestionEnum | string;
    public politics?: string;
    public porn?: string;
    public abuse?: string;
    public constructor(suggestion?: string) { 
        this['suggestion'] = suggestion;
    }
    public withSuggestion(suggestion: TextReviewRetSuggestionEnum | string): TextReviewRet {
        this['suggestion'] = suggestion;
        return this;
    }
    public withPolitics(politics: string): TextReviewRet {
        this['politics'] = politics;
        return this;
    }
    public withPorn(porn: string): TextReviewRet {
        this['porn'] = porn;
        return this;
    }
    public withAbuse(abuse: string): TextReviewRet {
        this['abuse'] = abuse;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TextReviewRetSuggestionEnum {
    BLOCK = 'block',
    PASS = 'pass',
    REVIEW = 'review'
}
