

export class Dictionary {
    public id?: string;
    public version?: string;
    private 'dict_id'?: string;
    private 'dict_key'?: string;
    private 'dict_code'?: string;
    private 'dict_val'?: string;
    private 'dict_pkey'?: string;
    private 'dict_pcode'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'publish_time'?: string;
    public scope?: string;
    public description?: string;
    private 'extension_field'?: object;
    private 'project_id'?: string;
    public language?: string;
    public constructor() { 
    }
    public withId(id: string): Dictionary {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): Dictionary {
        this['version'] = version;
        return this;
    }
    public withDictId(dictId: string): Dictionary {
        this['dict_id'] = dictId;
        return this;
    }
    public set dictId(dictId: string  | undefined) {
        this['dict_id'] = dictId;
    }
    public get dictId(): string | undefined {
        return this['dict_id'];
    }
    public withDictKey(dictKey: string): Dictionary {
        this['dict_key'] = dictKey;
        return this;
    }
    public set dictKey(dictKey: string  | undefined) {
        this['dict_key'] = dictKey;
    }
    public get dictKey(): string | undefined {
        return this['dict_key'];
    }
    public withDictCode(dictCode: string): Dictionary {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withDictVal(dictVal: string): Dictionary {
        this['dict_val'] = dictVal;
        return this;
    }
    public set dictVal(dictVal: string  | undefined) {
        this['dict_val'] = dictVal;
    }
    public get dictVal(): string | undefined {
        return this['dict_val'];
    }
    public withDictPkey(dictPkey: string): Dictionary {
        this['dict_pkey'] = dictPkey;
        return this;
    }
    public set dictPkey(dictPkey: string  | undefined) {
        this['dict_pkey'] = dictPkey;
    }
    public get dictPkey(): string | undefined {
        return this['dict_pkey'];
    }
    public withDictPcode(dictPcode: string): Dictionary {
        this['dict_pcode'] = dictPcode;
        return this;
    }
    public set dictPcode(dictPcode: string  | undefined) {
        this['dict_pcode'] = dictPcode;
    }
    public get dictPcode(): string | undefined {
        return this['dict_pcode'];
    }
    public withCreateTime(createTime: string): Dictionary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Dictionary {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withPublishTime(publishTime: string): Dictionary {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withScope(scope: string): Dictionary {
        this['scope'] = scope;
        return this;
    }
    public withDescription(description: string): Dictionary {
        this['description'] = description;
        return this;
    }
    public withExtensionField(extensionField: object): Dictionary {
        this['extension_field'] = extensionField;
        return this;
    }
    public set extensionField(extensionField: object  | undefined) {
        this['extension_field'] = extensionField;
    }
    public get extensionField(): object | undefined {
        return this['extension_field'];
    }
    public withProjectId(projectId: string): Dictionary {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLanguage(language: string): Dictionary {
        this['language'] = language;
        return this;
    }
}