import { ExportAntiVirusResultRequestBody } from './ExportAntiVirusResultRequestBody';


export class ExportAntiVirusResultRequest {
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
    private 'export_size'?: number;
    private 'file_hash'?: string;
    private 'task_name'?: string;
    private 'manual_isolate'?: boolean;
    public body?: ExportAntiVirusResultRequestBody;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportAntiVirusResultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ExportAntiVirusResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportAntiVirusResultRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostName(hostName: string): ExportAntiVirusResultRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ExportAntiVirusResultRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ExportAntiVirusResultRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withHandleStatus(handleStatus: string): ExportAntiVirusResultRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverityList(severityList: Array<string>): ExportAntiVirusResultRequest {
        this['severity_list'] = severityList;
        return this;
    }
    public set severityList(severityList: Array<string>  | undefined) {
        this['severity_list'] = severityList;
    }
    public get severityList(): Array<string> | undefined {
        return this['severity_list'];
    }
    public withAssetValue(assetValue: string): ExportAntiVirusResultRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withMalwareName(malwareName: string): ExportAntiVirusResultRequest {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withFilePath(filePath: string): ExportAntiVirusResultRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withExportSize(exportSize: number): ExportAntiVirusResultRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withFileHash(fileHash: string): ExportAntiVirusResultRequest {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withTaskName(taskName: string): ExportAntiVirusResultRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withManualIsolate(manualIsolate: boolean): ExportAntiVirusResultRequest {
        this['manual_isolate'] = manualIsolate;
        return this;
    }
    public set manualIsolate(manualIsolate: boolean  | undefined) {
        this['manual_isolate'] = manualIsolate;
    }
    public get manualIsolate(): boolean | undefined {
        return this['manual_isolate'];
    }
    public withBody(body: ExportAntiVirusResultRequestBody): ExportAntiVirusResultRequest {
        this['body'] = body;
        return this;
    }
}