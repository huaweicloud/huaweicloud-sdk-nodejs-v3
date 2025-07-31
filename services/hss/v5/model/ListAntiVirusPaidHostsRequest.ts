

export class ListAntiVirusPaidHostsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'group_id'?: string;
    private 'scan_type'?: string;
    private 'start_type'?: string;
    public constructor(scanType?: string, startType?: string) { 
        this['scan_type'] = scanType;
        this['start_type'] = startType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAntiVirusPaidHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAntiVirusPaidHostsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAntiVirusPaidHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListAntiVirusPaidHostsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListAntiVirusPaidHostsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAntiVirusPaidHostsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAntiVirusPaidHostsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withGroupId(groupId: string): ListAntiVirusPaidHostsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withScanType(scanType: string): ListAntiVirusPaidHostsRequest {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStartType(startType: string): ListAntiVirusPaidHostsRequest {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
}