

export class ListDomainsRequest {
    private 'domain_name'?: string;
    private 'business_type'?: string;
    private 'domain_status'?: string;
    private 'service_area'?: string;
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
    public withBusinessType(businessType: string): ListDomainsRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withDomainStatus(domainStatus: string): ListDomainsRequest {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): string | undefined {
        return this['domain_status'];
    }
    public withServiceArea(serviceArea: string): ListDomainsRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
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