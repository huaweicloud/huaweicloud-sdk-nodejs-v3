

export class ExportVulReportRequestInfo {
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'severity_level'?: string;
    private 'handle_status'?: string;
    public status?: string;
    private 'host_ids'?: Array<string>;
    private 'cluster_id'?: string;
    public constructor(handleStatus?: string) { 
        this['handle_status'] = handleStatus;
    }
    public withAssetValue(assetValue: string): ExportVulReportRequestInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ExportVulReportRequestInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostName(hostName: string): ExportVulReportRequestInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ExportVulReportRequestInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withSeverityLevel(severityLevel: string): ExportVulReportRequestInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withHandleStatus(handleStatus: string): ExportVulReportRequestInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withStatus(status: string): ExportVulReportRequestInfo {
        this['status'] = status;
        return this;
    }
    public withHostIds(hostIds: Array<string>): ExportVulReportRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withClusterId(clusterId: string): ExportVulReportRequestInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}