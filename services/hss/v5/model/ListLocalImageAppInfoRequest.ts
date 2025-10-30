

export class ListLocalImageAppInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_id'?: string;
    private 'app_name'?: string;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLocalImageAppInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListLocalImageAppInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLocalImageAppInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageId(imageId: string): ListLocalImageAppInfoRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAppName(appName: string): ListLocalImageAppInfoRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}