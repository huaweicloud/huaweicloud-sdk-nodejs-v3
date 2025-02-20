

export class QueryDiagnosisResultResultList {
    public key?: string;
    public value?: string;
    private 'is_multi_language'?: boolean;
    private 'module_name'?: string;
    public level?: string;
    public constructor() { 
    }
    public withKey(key: string): QueryDiagnosisResultResultList {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): QueryDiagnosisResultResultList {
        this['value'] = value;
        return this;
    }
    public withIsMultiLanguage(isMultiLanguage: boolean): QueryDiagnosisResultResultList {
        this['is_multi_language'] = isMultiLanguage;
        return this;
    }
    public set isMultiLanguage(isMultiLanguage: boolean  | undefined) {
        this['is_multi_language'] = isMultiLanguage;
    }
    public get isMultiLanguage(): boolean | undefined {
        return this['is_multi_language'];
    }
    public withModuleName(moduleName: string): QueryDiagnosisResultResultList {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withLevel(level: string): QueryDiagnosisResultResultList {
        this['level'] = level;
        return this;
    }
}