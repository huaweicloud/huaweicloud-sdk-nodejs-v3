

export class DictionaryDelete {
    private 'dict_id'?: string;
    private 'dict_key'?: string;
    public language?: string;
    public constructor(dictId?: string, dictKey?: string, language?: string) { 
        this['dict_id'] = dictId;
        this['dict_key'] = dictKey;
        this['language'] = language;
    }
    public withDictId(dictId: string): DictionaryDelete {
        this['dict_id'] = dictId;
        return this;
    }
    public set dictId(dictId: string  | undefined) {
        this['dict_id'] = dictId;
    }
    public get dictId(): string | undefined {
        return this['dict_id'];
    }
    public withDictKey(dictKey: string): DictionaryDelete {
        this['dict_key'] = dictKey;
        return this;
    }
    public set dictKey(dictKey: string  | undefined) {
        this['dict_key'] = dictKey;
    }
    public get dictKey(): string | undefined {
        return this['dict_key'];
    }
    public withLanguage(language: string): DictionaryDelete {
        this['language'] = language;
        return this;
    }
}