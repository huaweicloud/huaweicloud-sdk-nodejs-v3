

export class ListAntiVirusResultRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'handle_status'?: string;
    private 'severity_list'?: Array<string>;
    private 'asset_value'?: string;
    private 'malware_name'?: string;
    private 'file_path'?: string;
    private 'file_hash'?: string;
    private 'task_name'?: string;
    private 'manual_isolate'?: boolean;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAntiVirusResultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAntiVirusResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAntiVirusResultRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostName(hostName: string): ListAntiVirusResultRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAntiVirusResultRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAntiVirusResultRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withHandleStatus(handleStatus: string): ListAntiVirusResultRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverityList(severityList: Array<string>): ListAntiVirusResultRequest {
        this['severity_list'] = severityList;
        return this;
    }
    public set severityList(severityList: Array<string>  | undefined) {
        this['severity_list'] = severityList;
    }
    public get severityList(): Array<string> | undefined {
        return this['severity_list'];
    }
    public withAssetValue(assetValue: string): ListAntiVirusResultRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withMalwareName(malwareName: string): ListAntiVirusResultRequest {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withFilePath(filePath: string): ListAntiVirusResultRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileHash(fileHash: string): ListAntiVirusResultRequest {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withTaskName(taskName: string): ListAntiVirusResultRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withManualIsolate(manualIsolate: boolean): ListAntiVirusResultRequest {
        this['manual_isolate'] = manualIsolate;
        return this;
    }
    public set manualIsolate(manualIsolate: boolean  | undefined) {
        this['manual_isolate'] = manualIsolate;
    }
    public get manualIsolate(): boolean | undefined {
        return this['manual_isolate'];
    }
}