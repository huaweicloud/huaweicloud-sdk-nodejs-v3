

export class ShowHtapLtsConfigRequest {
    private 'X-Language'?: ShowHtapLtsConfigRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'instance_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: ShowHtapLtsConfigRequestXLanguageEnum | string): ShowHtapLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowHtapLtsConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowHtapLtsConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowHtapLtsConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHtapLtsConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceName(instanceName: string): ShowHtapLtsConfigRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLimit(limit: number): ShowHtapLtsConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowHtapLtsConfigRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHtapLtsConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
