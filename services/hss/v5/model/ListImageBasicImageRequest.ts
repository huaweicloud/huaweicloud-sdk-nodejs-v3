

export class ListImageBasicImageRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_id'?: string;
    private 'image_type'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'os_name'?: string;
    public constructor(region?: string, imageId?: string, imageType?: string) { 
        this['region'] = region;
        this['image_id'] = imageId;
        this['image_type'] = imageType;
    }
    public withRegion(region: string): ListImageBasicImageRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageBasicImageRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListImageBasicImageRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageBasicImageRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageId(imageId: string): ListImageBasicImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: string): ListImageBasicImageRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withNamespace(namespace: string): ListImageBasicImageRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageBasicImageRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListImageBasicImageRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withOsName(osName: string): ListImageBasicImageRequest {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
}