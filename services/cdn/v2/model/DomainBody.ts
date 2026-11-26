import { CreateDomainConfigs } from './CreateDomainConfigs';
import { SourcesRequestBody } from './SourcesRequestBody';


export class DomainBody {
    private 'domain_name'?: string;
    private 'business_type'?: DomainBodyBusinessTypeEnum | string;
    public sources?: Array<SourcesRequestBody>;
    private 'service_area'?: DomainBodyServiceAreaEnum | string;
    private 'enterprise_project_id'?: string;
    private 'origin_protocol'?: string;
    public configs?: CreateDomainConfigs;
    public constructor(domainName?: string, businessType?: string, sources?: Array<SourcesRequestBody>) { 
        this['domain_name'] = domainName;
        this['business_type'] = businessType;
        this['sources'] = sources;
    }
    public withDomainName(domainName: string): DomainBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBusinessType(businessType: DomainBodyBusinessTypeEnum | string): DomainBody {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: DomainBodyBusinessTypeEnum | string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): DomainBodyBusinessTypeEnum | string | undefined {
        return this['business_type'];
    }
    public withSources(sources: Array<SourcesRequestBody>): DomainBody {
        this['sources'] = sources;
        return this;
    }
    public withServiceArea(serviceArea: DomainBodyServiceAreaEnum | string): DomainBody {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: DomainBodyServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): DomainBodyServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DomainBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOriginProtocol(originProtocol: string): DomainBody {
        this['origin_protocol'] = originProtocol;
        return this;
    }
    public set originProtocol(originProtocol: string  | undefined) {
        this['origin_protocol'] = originProtocol;
    }
    public get originProtocol(): string | undefined {
        return this['origin_protocol'];
    }
    public withConfigs(configs: CreateDomainConfigs): DomainBody {
        this['configs'] = configs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainBodyBusinessTypeEnum {
    WEB = 'web',
    DOWNLOAD = 'download',
    VIDEO = 'video',
    WHOLESITE = 'wholeSite'
}
/**
    * @export
    * @enum {string}
    */
export enum DomainBodyServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
