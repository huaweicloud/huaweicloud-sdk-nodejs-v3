

export class DetectOpt {
    public type?: DetectOptTypeEnum | string;
    public enable?: boolean;
    public constructor() { 
    }
    public withType(type: DetectOptTypeEnum | string): DetectOpt {
        this['type'] = type;
        return this;
    }
    public withEnable(enable: boolean): DetectOpt {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DetectOptTypeEnum {
    LEXICON = 'lexicon',
    COMPLIANCE = 'compliance',
    INJECT = 'inject',
    IMMUNITY_LEXICON = 'immunity_lexicon',
    SUPPORTED_LANGUAGE = 'supported_language',
    PII = 'pii',
    ABUSE = 'abuse',
    TOPIC_DETECT = 'topic_detect'
}
