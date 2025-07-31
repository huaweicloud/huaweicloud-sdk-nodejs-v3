

export class ExportWebTamperHostRequestInfo {
    private 'host_id'?: string;
    private 'host_id_list'?: Array<string>;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'agent_id'?: string;
    private 'os_type'?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'protect_status'?: string;
    private 'agent_status'?: string;
    private 'rasp_protect_status'?: string;
    private 'wtp_status'?: string;
    public offset?: number;
    public limit?: number;
    private 'export_size'?: number;
    private 'export_headers'?: Array<Array<string>>;
    public constructor() { 
    }
    public withHostId(hostId: string): ExportWebTamperHostRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIdList(hostIdList: Array<string>): ExportWebTamperHostRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withHostName(hostName: string): ExportWebTamperHostRequestInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): ExportWebTamperHostRequestInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ExportWebTamperHostRequestInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAgentId(agentId: string): ExportWebTamperHostRequestInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withOsType(osType: string): ExportWebTamperHostRequestInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAssetValue(assetValue: string): ExportWebTamperHostRequestInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ExportWebTamperHostRequestInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withProtectStatus(protectStatus: string): ExportWebTamperHostRequestInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withAgentStatus(agentStatus: string): ExportWebTamperHostRequestInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withRaspProtectStatus(raspProtectStatus: string): ExportWebTamperHostRequestInfo {
        this['rasp_protect_status'] = raspProtectStatus;
        return this;
    }
    public set raspProtectStatus(raspProtectStatus: string  | undefined) {
        this['rasp_protect_status'] = raspProtectStatus;
    }
    public get raspProtectStatus(): string | undefined {
        return this['rasp_protect_status'];
    }
    public withWtpStatus(wtpStatus: string): ExportWebTamperHostRequestInfo {
        this['wtp_status'] = wtpStatus;
        return this;
    }
    public set wtpStatus(wtpStatus: string  | undefined) {
        this['wtp_status'] = wtpStatus;
    }
    public get wtpStatus(): string | undefined {
        return this['wtp_status'];
    }
    public withOffset(offset: number): ExportWebTamperHostRequestInfo {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportWebTamperHostRequestInfo {
        this['limit'] = limit;
        return this;
    }
    public withExportSize(exportSize: number): ExportWebTamperHostRequestInfo {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportWebTamperHostRequestInfo {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
}