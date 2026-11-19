

export class ListImageScanOverviewRequest {
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageScanOverviewRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): ListImageScanOverviewRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
}