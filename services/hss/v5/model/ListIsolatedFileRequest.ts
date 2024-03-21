

export class ListIsolatedFileRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'file_path'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'file_hash'?: string;
    private 'asset_value'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListIsolatedFileRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIsolatedFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFilePath(filePath: string): ListIsolatedFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withHostName(hostName: string): ListIsolatedFileRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListIsolatedFileRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListIsolatedFileRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withFileHash(fileHash: string): ListIsolatedFileRequest {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withAssetValue(assetValue: string): ListIsolatedFileRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withOffset(offset: number): ListIsolatedFileRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIsolatedFileRequest {
        this['limit'] = limit;
        return this;
    }
}