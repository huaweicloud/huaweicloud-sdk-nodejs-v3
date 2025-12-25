

export class DictionaryCreate {
    public version?: string;
    private 'dict_id'?: string;
    private 'dict_key'?: string;
    private 'dict_code'?: string;
    private 'dict_val'?: string;
    private 'dict_pkey'?: string;
    private 'dict_pcode'?: string;
    public scope?: string;
    public description?: string;
    private 'extend_field'?: object;
    public language?: string;
    public constructor(dictId?: string, dictKey?: string, dictCode?: string, dictVal?: string, language?: string) { 
        this['dict_id'] = dictId;
        this['dict_key'] = dictKey;
        this['dict_code'] = dictCode;
        this['dict_val'] = dictVal;
        this['language'] = language;
    }
    public withVersion(version: string): DictionaryCreate {
        this['version'] = version;
        return this;
    }
    public withDictId(dictId: string): DictionaryCreate {
        this['dict_id'] = dictId;
        return this;
    }
    public set dictId(dictId: string  | undefined) {
        this['dict_id'] = dictId;
    }
    public get dictId(): string | undefined {
        return this['dict_id'];
    }
    public withDictKey(dictKey: string): DictionaryCreate {
        this['dict_key'] = dictKey;
        return this;
    }
    public set dictKey(dictKey: string  | undefined) {
        this['dict_key'] = dictKey;
    }
    public get dictKey(): string | undefined {
        return this['dict_key'];
    }
    public withDictCode(dictCode: string): DictionaryCreate {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withDictVal(dictVal: string): DictionaryCreate {
        this['dict_val'] = dictVal;
        return this;
    }
    public set dictVal(dictVal: string  | undefined) {
        this['dict_val'] = dictVal;
    }
    public get dictVal(): string | undefined {
        return this['dict_val'];
    }
    public withDictPkey(dictPkey: string): DictionaryCreate {
        this['dict_pkey'] = dictPkey;
        return this;
    }
    public set dictPkey(dictPkey: string  | undefined) {
        this['dict_pkey'] = dictPkey;
    }
    public get dictPkey(): string | undefined {
        return this['dict_pkey'];
    }
    public withDictPcode(dictPcode: string): DictionaryCreate {
        this['dict_pcode'] = dictPcode;
        return this;
    }
    public set dictPcode(dictPcode: string  | undefined) {
        this['dict_pcode'] = dictPcode;
    }
    public get dictPcode(): string | undefined {
        return this['dict_pcode'];
    }
    public withScope(scope: string): DictionaryCreate {
        this['scope'] = scope;
        return this;
    }
    public withDescription(description: string): DictionaryCreate {
        this['description'] = description;
        return this;
    }
    public withExtendField(extendField: object): DictionaryCreate {
        this['extend_field'] = extendField;
        return this;
    }
    public set extendField(extendField: object  | undefined) {
        this['extend_field'] = extendField;
    }
    public get extendField(): object | undefined {
        return this['extend_field'];
    }
    public withLanguage(language: string): DictionaryCreate {
        this['language'] = language;
        return this;
    }
}