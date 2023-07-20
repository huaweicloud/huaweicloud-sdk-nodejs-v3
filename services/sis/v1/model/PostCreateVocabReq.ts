

export class PostCreateVocabReq {
    public name?: string;
    public description?: string;
    public language?: PostCreateVocabReqLanguageEnum | string;
    public contents?: Array<string>;
    public constructor(name?: string, language?: string, contents?: Array<string>) { 
        this['name'] = name;
        this['language'] = language;
        this['contents'] = contents;
    }
    public withName(name: string): PostCreateVocabReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PostCreateVocabReq {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: PostCreateVocabReqLanguageEnum | string): PostCreateVocabReq {
        this['language'] = language;
        return this;
    }
    public withContents(contents: Array<string>): PostCreateVocabReq {
        this['contents'] = contents;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostCreateVocabReqLanguageEnum {
    CHINESE_MANDARIN = 'chinese_mandarin'
}
