

export class SaveTtscVocabularyConfigsRequestBody {
    public type?: SaveTtscVocabularyConfigsRequestBodyTypeEnum | string;
    public key?: string;
    public value?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: SaveTtscVocabularyConfigsRequestBodyTypeEnum | string): SaveTtscVocabularyConfigsRequestBody {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): SaveTtscVocabularyConfigsRequestBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SaveTtscVocabularyConfigsRequestBody {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SaveTtscVocabularyConfigsRequestBodyTypeEnum {
    CHINESE_G2P = 'CHINESE_G2P',
    PHONETIC_SYMBOL = 'PHONETIC_SYMBOL',
    CONTINUUM = 'CONTINUUM',
    ALIAS = 'ALIAS',
    SAY_AS = 'SAY_AS'
}
