

export class ListConfigurationDictionariesRequest {
    private 'X-Language'?: string;
    public scene?: string;
    public level?: string;
    public scope?: string;
    private 'dict_key'?: string;
    private 'is_built_in'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): ListConfigurationDictionariesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withScene(scene: string): ListConfigurationDictionariesRequest {
        this['scene'] = scene;
        return this;
    }
    public withLevel(level: string): ListConfigurationDictionariesRequest {
        this['level'] = level;
        return this;
    }
    public withScope(scope: string): ListConfigurationDictionariesRequest {
        this['scope'] = scope;
        return this;
    }
    public withDictKey(dictKey: string): ListConfigurationDictionariesRequest {
        this['dict_key'] = dictKey;
        return this;
    }
    public set dictKey(dictKey: string  | undefined) {
        this['dict_key'] = dictKey;
    }
    public get dictKey(): string | undefined {
        return this['dict_key'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): ListConfigurationDictionariesRequest {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withOffset(offset: number): ListConfigurationDictionariesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigurationDictionariesRequest {
        this['limit'] = limit;
        return this;
    }
}