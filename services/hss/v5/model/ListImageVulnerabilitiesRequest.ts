

export class ListImageVulnerabilitiesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'instance_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'tag_name'?: string;
    private 'repair_necessity'?: string;
    private 'vul_id'?: string;
    private 'app_name'?: string;
    public type?: string;
    private 'handle_status'?: string;
    public constructor(imageType?: string, imageId?: string, namespace?: string, imageName?: string, tagName?: string) { 
        this['image_type'] = imageType;
        this['image_id'] = imageId;
        this['namespace'] = namespace;
        this['image_name'] = imageName;
        this['tag_name'] = tagName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListImageVulnerabilitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageVulnerabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageType(imageType: string): ListImageVulnerabilitiesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): ListImageVulnerabilitiesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withInstanceId(instanceId: string): ListImageVulnerabilitiesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespace(namespace: string): ListImageVulnerabilitiesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageVulnerabilitiesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withTagName(tagName: string): ListImageVulnerabilitiesRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withRepairNecessity(repairNecessity: string): ListImageVulnerabilitiesRequest {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withVulId(vulId: string): ListImageVulnerabilitiesRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withAppName(appName: string): ListImageVulnerabilitiesRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withType(type: string): ListImageVulnerabilitiesRequest {
        this['type'] = type;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListImageVulnerabilitiesRequest {
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