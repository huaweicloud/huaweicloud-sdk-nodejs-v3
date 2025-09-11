

export class ListLtsConfigsRequest {
    private 'X-Language'?: ListLtsConfigsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_mode'?: ListLtsConfigsRequestInstanceModeEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListLtsConfigsRequestXLanguageEnum | string): ListLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListLtsConfigsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListLtsConfigsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListLtsConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListLtsConfigsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceMode(instanceMode: ListLtsConfigsRequestInstanceModeEnum | string): ListLtsConfigsRequest {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: ListLtsConfigsRequestInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): ListLtsConfigsRequestInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLtsConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListLtsConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLtsConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLtsConfigsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLtsConfigsRequestInstanceModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent',
    COMBINED = 'Combined'
}
