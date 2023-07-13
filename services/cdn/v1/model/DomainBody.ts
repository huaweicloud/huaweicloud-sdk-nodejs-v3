import { Sources } from './Sources';


export class DomainBody {
    private 'domain_name': string | undefined;
    private 'business_type': DomainBodyBusinessTypeEnum | undefined;
    public sources: Array<Sources>;
    private 'service_area': DomainBodyServiceAreaEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(domainName?: any, businessType?: any, sources?: any, serviceArea?: any) { 
        this['domain_name'] = domainName;
        this['business_type'] = businessType;
        this['sources'] = sources;
        this['service_area'] = serviceArea;
    }
    public withDomainName(domainName: string): DomainBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withBusinessType(businessType: DomainBodyBusinessTypeEnum): DomainBody {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: DomainBodyBusinessTypeEnum | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType() {
        return this['business_type'];
    }
    public withSources(sources: Array<Sources>): DomainBody {
        this['sources'] = sources;
        return this;
    }
    public withServiceArea(serviceArea: DomainBodyServiceAreaEnum): DomainBody {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: DomainBodyServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DomainBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
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
