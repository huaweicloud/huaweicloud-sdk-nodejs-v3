

export class VoiceProperties {
    private 'job_tag'?: VoicePropertiesJobTagEnum | string;
    public sex?: VoicePropertiesSexEnum | string;
    public language?: VoicePropertiesLanguageEnum | string;
    public constructor(jobTag?: string, sex?: string, language?: string) { 
        this['job_tag'] = jobTag;
        this['sex'] = sex;
        this['language'] = language;
    }
    public withJobTag(jobTag: VoicePropertiesJobTagEnum | string): VoiceProperties {
        this['job_tag'] = jobTag;
        return this;
    }
    public set jobTag(jobTag: VoicePropertiesJobTagEnum | string  | undefined) {
        this['job_tag'] = jobTag;
    }
    public get jobTag(): VoicePropertiesJobTagEnum | string | undefined {
        return this['job_tag'];
    }
    public withSex(sex: VoicePropertiesSexEnum | string): VoiceProperties {
        this['sex'] = sex;
        return this;
    }
    public withLanguage(language: VoicePropertiesLanguageEnum | string): VoiceProperties {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VoicePropertiesJobTagEnum {
    ECOMMERCE = 'ECOMMERCE',
    NEWS = 'NEWS',
    MARKETING = 'MARKETING'
}
/**
    * @export
    * @enum {string}
    */
export enum VoicePropertiesSexEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE'
}
/**
    * @export
    * @enum {string}
    */
export enum VoicePropertiesLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
