

export class ShowFilePathWhiteListsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'file_path'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ShowFilePathWhiteListsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowFilePathWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFilePath(filePath: string): ShowFilePathWhiteListsRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}