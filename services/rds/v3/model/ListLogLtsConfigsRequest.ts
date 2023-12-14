

export class ListLogLtsConfigsRequest {
    public engine?: ListLogLtsConfigsRequestEngineEnum | string;
    private 'enterprise_project_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public limit?: number;
    public offset?: number;
    public sort?: string;
    private 'instance_status'?: string;
    private 'X-Language'?: ListLogLtsConfigsRequestXLanguageEnum | string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListLogLtsConfigsRequestEngineEnum | string): ListLogLtsConfigsRequest {
        this['engine'] = engine;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLogLtsConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceId(instanceId: string): ListLogLtsConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListLogLtsConfigsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLimit(limit: number): ListLogLtsConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLogLtsConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSort(sort: string): ListLogLtsConfigsRequest {
        this['sort'] = sort;
        return this;
    }
    public withInstanceStatus(instanceStatus: string): ListLogLtsConfigsRequest {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withXLanguage(xLanguage: ListLogLtsConfigsRequestXLanguageEnum | string): ListLogLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListLogLtsConfigsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListLogLtsConfigsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLogLtsConfigsRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLogLtsConfigsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
