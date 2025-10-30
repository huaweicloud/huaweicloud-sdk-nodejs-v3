

export class ListVulRepoImageRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_id'?: string;
    private 'app_name'?: string;
    public constructor(vulId?: string) { 
        this['vul_id'] = vulId;
    }
    public withRegion(region: string): ListVulRepoImageRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulRepoImageRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulRepoImageRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulRepoImageRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulId(vulId: string): ListVulRepoImageRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withNamespace(namespace: string): ListVulRepoImageRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListVulRepoImageRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageId(imageId: string): ListVulRepoImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAppName(appName: string): ListVulRepoImageRequest {
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