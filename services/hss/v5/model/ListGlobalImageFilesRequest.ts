

export class ListGlobalImageFilesRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_type'?: string;
    private 'file_name'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ListGlobalImageFilesRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGlobalImageFilesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListGlobalImageFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGlobalImageFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListGlobalImageFilesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withFileName(fileName: string): ListGlobalImageFilesRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}