

export class DeleteSubtitle {
    public type?: DeleteSubtitleTypeEnum | string;
    public language?: string;
    public constructor(type?: string, language?: string) { 
        this['type'] = type;
        this['language'] = language;
    }
    public withType(type: DeleteSubtitleTypeEnum | string): DeleteSubtitle {
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
