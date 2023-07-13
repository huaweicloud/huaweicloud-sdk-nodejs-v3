

export class Subtitle {
    public id: number;
    public type: SubtitleTypeEnum;
    public language: SubtitleLanguageEnum;
    public md5?: string;
    public description?: string;
    public constructor(id?: any, type?: any, language?: any) { 
        this['id'] = id;
        this['type'] = type;
        this['language'] = language;
    }
    public withId(id: number): Subtitle {
        this['id'] = id;
        return this;
    }
    public withType(type: SubtitleTypeEnum): Subtitle {
        this['type'] = type;
        return this;
    }
    public withLanguage(language: SubtitleLanguageEnum): Subtitle {
        this['language'] = language;
        return this;
    }
    public withMd5(md5: string): Subtitle {
        this['md5'] = md5;
        return this;
    }
    public withDescription(description: string): Subtitle {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubtitleTypeEnum {
    SRT = 'SRT'
}
/**
    * @export
    * @enum {string}
    */
export enum SubtitleLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
