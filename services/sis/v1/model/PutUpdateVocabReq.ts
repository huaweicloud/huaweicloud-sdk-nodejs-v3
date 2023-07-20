

export class PutUpdateVocabReq {
    public name?: string;
    public description?: string;
    public language?: PutUpdateVocabReqLanguageEnum | string;
    public contents?: Array<string>;
    public constructor(name?: string, language?: string, contents?: Array<string>) { 
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
    public withLanguage(language: PutUpdateVocabReqLanguageEnum | string): PutUpdateVocabReq {
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
