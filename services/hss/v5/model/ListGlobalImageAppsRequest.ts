

export class ListGlobalImageAppsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_type'?: string;
    private 'app_name'?: string;
    private 'is_compliant'?: boolean;
    public constructor() { 
    }
    public withRegion(region: string): ListGlobalImageAppsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGlobalImageAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListGlobalImageAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalImageAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListGlobalImageAppsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withAppName(appName: string): ListGlobalImageAppsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withIsCompliant(isCompliant: boolean): ListGlobalImageAppsRequest {
        this['is_compliant'] = isCompliant;
        return this;
    }
    public set isCompliant(isCompliant: boolean  | undefined) {
        this['is_compliant'] = isCompliant;
    }
    public get isCompliant(): boolean | undefined {
        return this['is_compliant'];
    }
}