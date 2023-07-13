

export class PutUpdateVocabReq {
    public name: string;
    public description?: string;
    public language: PutUpdateVocabReqLanguageEnum;
    public contents: Array<string>;
    public constructor(name?: any, language?: any, contents?: any) { 
        this['name'] = name;
        this['language'] = language;
        this['contents'] = contents;
    }
    public withName(name: string): PutUpdateVocabReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PutUpdateVocabReq {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: PutUpdateVocabReqLanguageEnum): PutUpdateVocabReq {
        this['language'] = language;
        return this;
    }
    public withContents(contents: Array<string>): PutUpdateVocabReq {
        this['contents'] = contents;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutUpdateVocabReqLanguageEnum {
    CHINESE_MANDARIN = 'chinese_mandarin'
}
