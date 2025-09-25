

export class ListImageFilesRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'image_type'?: string;
    private 'image_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'tag_name'?: string;
    private 'file_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(region?: string, imageType?: string, imageId?: string) { 
        this['region'] = region;
        this['image_type'] = imageType;
        this['image_id'] = imageId;
    }
    public withRegion(region: string): ListImageFilesRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageFilesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageType(imageType: string): ListImageFilesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): ListImageFilesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withNamespace(namespace: string): ListImageFilesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageFilesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withTagName(tagName: string): ListImageFilesRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withFileName(fileName: string): ListImageFilesRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLimit(limit: number): ListImageFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageFilesRequest {
        this['offset'] = offset;
        return this;
    }
}