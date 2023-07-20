

export class ListDomainsRequest {
    private 'domain_name'?: string;
    private 'business_type'?: ListDomainsRequestBusinessTypeEnum | string;
    private 'domain_status'?: ListDomainsRequestDomainStatusEnum | string;
    private 'service_area'?: ListDomainsRequestServiceAreaEnum | string;
    private 'page_size'?: number;
    private 'page_number'?: number;
    private 'show_tags'?: boolean;
    private 'exact_match'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): ListDomainsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBusinessType(businessType: ListDomainsRequestBusinessTypeEnum | string): ListDomainsRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: ListDomainsRequestBusinessTypeEnum | string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): ListDomainsRequestBusinessTypeEnum | string | undefined {
        return this['business_type'];
    }
    public withDomainStatus(domainStatus: ListDomainsRequestDomainStatusEnum | string): ListDomainsRequest {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: ListDomainsRequestDomainStatusEnum | string  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): ListDomainsRequestDomainStatusEnum | string | undefined {
        return this['domain_status'];
    }
    public withServiceArea(serviceArea: ListDomainsRequestServiceAreaEnum | string): ListDomainsRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: ListDomainsRequestServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): ListDomainsRequestServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withPageSize(pageSize: number): ListDomainsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ListDomainsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withShowTags(showTags: boolean): ListDomainsRequest {
        this['show_tags'] = showTags;
        return this;
    }
    public set showTags(showTags: boolean  | undefined) {
        this['show_tags'] = showTags;
    }
    public get showTags(): boolean | undefined {
        return this['show_tags'];
    }
    public withExactMatch(exactMatch: boolean): ListDomainsRequest {
        this['exact_match'] = exactMatch;
        return this;
    }
    public set exactMatch(exactMatch: boolean  | undefined) {
        this['exact_match'] = exactMatch;
    }
    public get exactMatch(): boolean | undefined {
        return this['exact_match'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDomainsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDomainsRequestBusinessTypeEnum {
    WEB = 'web',
    DOWNLOAD = 'download',
    VIDEO = 'video',
    WHOLESITE = 'wholeSite'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDomainsRequestDomainStatusEnum {
    ONLINE = 'online',
    OFFLINE = 'offline',
    CONFIGURING = 'configuring',
    CONFIGURE_FAILED = 'configure_failed',
    CHECKING = 'checking',
    CHECK_FAILED = 'check_failed',
    DELETING = 'deleting'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDomainsRequestServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
