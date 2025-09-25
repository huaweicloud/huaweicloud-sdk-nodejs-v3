

export class ListImageAppsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_type'?: string;
    private 'image_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'tag_name'?: string;
    private 'app_name'?: string;
    public constructor(imageType?: string, imageId?: string) { 
        this['image_type'] = imageType;
        this['image_id'] = imageId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListImageAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageType(imageType: string): ListImageAppsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): ListImageAppsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withNamespace(namespace: string): ListImageAppsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageAppsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withTagName(tagName: string): ListImageAppsRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withAppName(appName: string): ListImageAppsRequest {
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