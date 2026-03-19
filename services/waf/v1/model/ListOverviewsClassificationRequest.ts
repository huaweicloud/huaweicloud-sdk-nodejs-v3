

export class ListOverviewsClassificationRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListOverviewsClassificationRequestXLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public top?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListOverviewsClassificationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListOverviewsClassificationRequestXLanguageEnum | string): ListOverviewsClassificationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListOverviewsClassificationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListOverviewsClassificationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListOverviewsClassificationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListOverviewsClassificationRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListOverviewsClassificationRequest {
        this['to'] = to;
        return this;
    }
    public withTop(top: number): ListOverviewsClassificationRequest {
        this['top'] = top;
        return this;
    }
    public withHosts(hosts: Array<string>): ListOverviewsClassificationRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListOverviewsClassificationRequest {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListOverviewsClassificationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
