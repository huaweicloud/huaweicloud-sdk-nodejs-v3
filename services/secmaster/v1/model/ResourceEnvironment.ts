

export class ResourceEnvironment {
    private 'vendor_type'?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    private 'vendor_name'?: string;
    private 'idc_name'?: string;
    private 'idc_id'?: string;
    public constructor(vendorType?: string, domainId?: string, vendorName?: string, idcName?: string) { 
        this['vendor_type'] = vendorType;
        this['domain_id'] = domainId;
        this['vendor_name'] = vendorName;
        this['idc_name'] = idcName;
    }
    public withVendorType(vendorType: string): ResourceEnvironment {
        this['vendor_type'] = vendorType;
        return this;
    }
    public set vendorType(vendorType: string  | undefined) {
        this['vendor_type'] = vendorType;
    }
    public get vendorType(): string | undefined {
        return this['vendor_type'];
    }
    public withDomainId(domainId: string): ResourceEnvironment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): ResourceEnvironment {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): ResourceEnvironment {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEpId(epId: string): ResourceEnvironment {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): ResourceEnvironment {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withVendorName(vendorName: string): ResourceEnvironment {
        this['vendor_name'] = vendorName;
        return this;
    }
    public set vendorName(vendorName: string  | undefined) {
        this['vendor_name'] = vendorName;
    }
    public get vendorName(): string | undefined {
        return this['vendor_name'];
    }
    public withIdcName(idcName: string): ResourceEnvironment {
        this['idc_name'] = idcName;
        return this;
    }
    public set idcName(idcName: string  | undefined) {
        this['idc_name'] = idcName;
    }
    public get idcName(): string | undefined {
        return this['idc_name'];
    }
    public withIdcId(idcId: string): ResourceEnvironment {
        this['idc_id'] = idcId;
        return this;
    }
    public set idcId(idcId: string  | undefined) {
        this['idc_id'] = idcId;
    }
    public get idcId(): string | undefined {
        return this['idc_id'];
    }
}