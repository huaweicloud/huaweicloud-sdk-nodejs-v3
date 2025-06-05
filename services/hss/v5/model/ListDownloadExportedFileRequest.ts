

export class ListDownloadExportedFileRequest {
    private 'file_id'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor(fileId?: string) { 
        this['file_id'] = fileId;
    }
    public withFileId(fileId: string): ListDownloadExportedFileRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withRegion(region: string): ListDownloadExportedFileRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDownloadExportedFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}