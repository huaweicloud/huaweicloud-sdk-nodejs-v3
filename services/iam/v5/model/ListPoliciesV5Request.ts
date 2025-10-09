

export class ListPoliciesV5Request {
    public limit?: number;
    public marker?: string;
    private 'policy_type'?: ListPoliciesV5RequestPolicyTypeEnum | string;
    private 'path_prefix'?: string;
    private 'only_attached'?: boolean;
    private 'X-Language'?: ListPoliciesV5RequestXLanguageEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListPoliciesV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPoliciesV5Request {
        this['marker'] = marker;
        return this;
    }
    public withPolicyType(policyType: ListPoliciesV5RequestPolicyTypeEnum | string): ListPoliciesV5Request {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: ListPoliciesV5RequestPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): ListPoliciesV5RequestPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
    public withPathPrefix(pathPrefix: string): ListPoliciesV5Request {
        this['path_prefix'] = pathPrefix;
        return this;
    }
    public set pathPrefix(pathPrefix: string  | undefined) {
        this['path_prefix'] = pathPrefix;
    }
    public get pathPrefix(): string | undefined {
        return this['path_prefix'];
    }
    public withOnlyAttached(onlyAttached: boolean): ListPoliciesV5Request {
        this['only_attached'] = onlyAttached;
        return this;
    }
    public set onlyAttached(onlyAttached: boolean  | undefined) {
        this['only_attached'] = onlyAttached;
    }
    public get onlyAttached(): boolean | undefined {
        return this['only_attached'];
    }
    public withXLanguage(xLanguage: ListPoliciesV5RequestXLanguageEnum | string): ListPoliciesV5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListPoliciesV5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListPoliciesV5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPoliciesV5RequestPolicyTypeEnum {
    CUSTOM = 'custom',
    SYSTEM = 'system'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPoliciesV5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
