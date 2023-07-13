

export class DeleteSubtitle {
    public type: DeleteSubtitleTypeEnum;
    public language: string;
    public constructor(type?: any, language?: any) { 
        this['type'] = type;
        this['language'] = language;
    }
    public withType(type: DeleteSubtitleTypeEnum): DeleteSubtitle {
        this['type'] = type;
        return this;
    }
    public withLanguage(language: string): DeleteSubtitle {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSubtitleTypeEnum {
    VTT = 'VTT'
}
