

export class ProductInfo {
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public region?: string;
    private 'company_name'?: string;
    private 'product_name'?: string;
    public constructor(domainId?: string, projectId?: string, region?: string, companyName?: string, productName?: string) { 
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['region'] = region;
        this['company_name'] = companyName;
        this['product_name'] = productName;
    }
    public withDomainId(domainId: string): ProductInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ProductInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegion(region: string): ProductInfo {
        this['region'] = region;
        return this;
    }
    public withCompanyName(companyName: string): ProductInfo {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
    public withProductName(productName: string): ProductInfo {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
}