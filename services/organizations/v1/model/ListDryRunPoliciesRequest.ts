

export class ListDryRunPoliciesRequest {
    private 'X-Security-Token'?: string;
    private 'attached_entity_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'X-Language'?: ListDryRunPoliciesRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListDryRunPoliciesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withAttachedEntityId(attachedEntityId: string): ListDryRunPoliciesRequest {
        this['attached_entity_id'] = attachedEntityId;
        return this;
    }
    public set attachedEntityId(attachedEntityId: string  | undefined) {
        this['attached_entity_id'] = attachedEntityId;
    }
    public get attachedEntityId(): string | undefined {
        return this['attached_entity_id'];
    }
    public withLimit(limit: number): ListDryRunPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDryRunPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withXLanguage(xLanguage: ListDryRunPoliciesRequestXLanguageEnum | string): ListDryRunPoliciesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDryRunPoliciesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDryRunPoliciesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDryRunPoliciesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
