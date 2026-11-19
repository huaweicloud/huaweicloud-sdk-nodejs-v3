

export class ListLocalImageVulRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'repair_necessity'?: string;
    private 'image_id'?: string;
    private 'vul_id'?: string;
    private 'app_name'?: string;
    public type?: string;
    private 'handle_status'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLocalImageVulRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListLocalImageVulRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLocalImageVulRequest {
        this['limit'] = limit;
        return this;
    }
    public withRepairNecessity(repairNecessity: string): ListLocalImageVulRequest {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withImageId(imageId: string): ListLocalImageVulRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withVulId(vulId: string): ListLocalImageVulRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withAppName(appName: string): ListLocalImageVulRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withType(type: string): ListLocalImageVulRequest {
        this['type'] = type;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListLocalImageVulRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
}