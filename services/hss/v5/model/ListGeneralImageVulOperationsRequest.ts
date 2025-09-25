

export class ListGeneralImageVulOperationsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'vul_id'?: string;
    private 'image_id'?: string;
    private 'image_type'?: string;
    private 'image_name'?: string;
    public status?: string;
    private 'user_name'?: string;
    private 'handle_type'?: string;
    private 'app_name'?: string;
    private 'app_version'?: string;
    public remark?: string;
    public constructor(vulId?: string, imageType?: string) { 
        this['vul_id'] = vulId;
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGeneralImageVulOperationsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListGeneralImageVulOperationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGeneralImageVulOperationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withVulId(vulId: string): ListGeneralImageVulOperationsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withImageId(imageId: string): ListGeneralImageVulOperationsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: string): ListGeneralImageVulOperationsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageName(imageName: string): ListGeneralImageVulOperationsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withStatus(status: string): ListGeneralImageVulOperationsRequest {
        this['status'] = status;
        return this;
    }
    public withUserName(userName: string): ListGeneralImageVulOperationsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withHandleType(handleType: string): ListGeneralImageVulOperationsRequest {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withAppName(appName: string): ListGeneralImageVulOperationsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): ListGeneralImageVulOperationsRequest {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withRemark(remark: string): ListGeneralImageVulOperationsRequest {
        this['remark'] = remark;
        return this;
    }
}