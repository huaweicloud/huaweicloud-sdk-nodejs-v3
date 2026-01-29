

export class ListAlertRspEnvironment {
    private 'vendor_type'?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'cross_workspace_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withVendorType(vendorType: string): ListAlertRspEnvironment {
        this['vendor_type'] = vendorType;
        return this;
    }
    public set vendorType(vendorType: string  | undefined) {
        this['vendor_type'] = vendorType;
    }
    public get vendorType(): string | undefined {
        return this['vendor_type'];
    }
    public withDomainId(domainId: string): ListAlertRspEnvironment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): ListAlertRspEnvironment {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCrossWorkspaceId(crossWorkspaceId: string): ListAlertRspEnvironment {
        this['cross_workspace_id'] = crossWorkspaceId;
        return this;
    }
    public set crossWorkspaceId(crossWorkspaceId: string  | undefined) {
        this['cross_workspace_id'] = crossWorkspaceId;
    }
    public get crossWorkspaceId(): string | undefined {
        return this['cross_workspace_id'];
    }
    public withProjectId(projectId: string): ListAlertRspEnvironment {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}