

export class SaveTtscVocabularyConfigsRequestBody {
    public type?: SaveTtscVocabularyConfigsRequestBodyTypeEnum | string;
    public key?: string;
    public value?: string;
    private 'group_id'?: string;
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
    public withGroupId(groupId: string): SaveTtscVocabularyConfigsRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
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
