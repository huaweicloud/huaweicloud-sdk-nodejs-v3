import { OrgConformancePackRequestBody } from './OrgConformancePackRequestBody';


export class CreateOrganizationConformancePackRequest {
    private 'organization_id'?: string;
    private 'X-Language'?: CreateOrganizationConformancePackRequestXLanguageEnum | string;
    public body?: OrgConformancePackRequestBody;
    public constructor(organizationId?: string) { 
        this['organization_id'] = organizationId;
    }
    public withOrganizationId(organizationId: string): CreateOrganizationConformancePackRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withXLanguage(xLanguage: CreateOrganizationConformancePackRequestXLanguageEnum | string): CreateOrganizationConformancePackRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateOrganizationConformancePackRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateOrganizationConformancePackRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OrgConformancePackRequestBody): CreateOrganizationConformancePackRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOrganizationConformancePackRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
