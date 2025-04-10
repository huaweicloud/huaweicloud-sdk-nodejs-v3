

export class ListAntiVirusHostRequest {
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
    private 'policy_id'?: string;
    private 'next_start_time'?: number;
    public constructor(offset?: number, limit?: number, scanType?: string, startType?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['scan_type'] = scanType;
        this['start_type'] = startType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAntiVirusHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAntiVirusHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAntiVirusHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListAntiVirusHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListAntiVirusHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAntiVirusHostRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAntiVirusHostRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withGroupId(groupId: string): ListAntiVirusHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withScanType(scanType: string): ListAntiVirusHostRequest {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStartType(startType: string): ListAntiVirusHostRequest {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): string | undefined {
        return this['start_type'];
    }
    public withPolicyId(policyId: string): ListAntiVirusHostRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withNextStartTime(nextStartTime: number): ListAntiVirusHostRequest {
        this['next_start_time'] = nextStartTime;
        return this;
    }
    public set nextStartTime(nextStartTime: number  | undefined) {
        this['next_start_time'] = nextStartTime;
    }
    public get nextStartTime(): number | undefined {
        return this['next_start_time'];
    }
}