

export class CreateIndicatorDetailDataSource {
    private 'source_type'?: number;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'product_name'?: string;
    private 'product_feature'?: string;
    public constructor(sourceType?: number, domainId?: string, projectId?: string, regionId?: string, productName?: string, productFeature?: string) { 
        this['source_type'] = sourceType;
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['product_name'] = productName;
        this['product_feature'] = productFeature;
    }
    public withSourceType(sourceType: number): CreateIndicatorDetailDataSource {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withDomainId(domainId: string): CreateIndicatorDetailDataSource {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreateIndicatorDetailDataSource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreateIndicatorDetailDataSource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProductName(productName: string): CreateIndicatorDetailDataSource {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withProductFeature(productFeature: string): CreateIndicatorDetailDataSource {
        this['product_feature'] = productFeature;
        return this;
    }
    public set productFeature(productFeature: string  | undefined) {
        this['product_feature'] = productFeature;
    }
    public get productFeature(): string | undefined {
        return this['product_feature'];
    }
}