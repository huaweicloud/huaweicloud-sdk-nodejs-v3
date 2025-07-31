

export class ListIacFilesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'scan_type'?: string;
    private 'file_id'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public risky?: boolean;
    private 'cicd_id'?: string;
    private 'cicd_name'?: string;
    public constructor(offset?: number, limit?: number, scanType?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['scan_type'] = scanType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIacFilesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListIacFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIacFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withScanType(scanType: string): ListIacFilesRequest {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withFileId(fileId: string): ListIacFilesRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileName(fileName: string): ListIacFilesRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): ListIacFilesRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withRisky(risky: boolean): ListIacFilesRequest {
        this['risky'] = risky;
        return this;
    }
    public withCicdId(cicdId: string): ListIacFilesRequest {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withCicdName(cicdName: string): ListIacFilesRequest {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
}