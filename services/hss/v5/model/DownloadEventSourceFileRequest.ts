

export class DownloadEventSourceFileRequest {
    private 'enterprise_project_id'?: string;
    private 'file_hash'?: string;
    public constructor(fileHash?: string) { 
        this['file_hash'] = fileHash;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DownloadEventSourceFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFileHash(fileHash: string): DownloadEventSourceFileRequest {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
}