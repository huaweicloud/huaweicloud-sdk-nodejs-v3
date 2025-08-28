

export class ListVulAffectImagesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'is_handled'?: boolean;
    private 'vul_id'?: string;
    public type?: string;
    private 'image_type'?: string;
    private 'repair_necessity'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    public status?: string;
    private 'cluster_id'?: string;
    public constructor(isHandled?: boolean, vulId?: string, type?: string, imageType?: string) { 
        this['is_handled'] = isHandled;
        this['vul_id'] = vulId;
        this['type'] = type;
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulAffectImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulAffectImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulAffectImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withIsHandled(isHandled: boolean): ListVulAffectImagesRequest {
        this['is_handled'] = isHandled;
        return this;
    }
    public set isHandled(isHandled: boolean  | undefined) {
        this['is_handled'] = isHandled;
    }
    public get isHandled(): boolean | undefined {
        return this['is_handled'];
    }
    public withVulId(vulId: string): ListVulAffectImagesRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withType(type: string): ListVulAffectImagesRequest {
        this['type'] = type;
        return this;
    }
    public withImageType(imageType: string): ListVulAffectImagesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withRepairNecessity(repairNecessity: string): ListVulAffectImagesRequest {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withImageId(imageId: string): ListVulAffectImagesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ListVulAffectImagesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withRegistryName(registryName: string): ListVulAffectImagesRequest {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): ListVulAffectImagesRequest {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withStatus(status: string): ListVulAffectImagesRequest {
        this['status'] = status;
        return this;
    }
    public withClusterId(clusterId: string): ListVulAffectImagesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}