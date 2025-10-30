

export class ListVulHostVulsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_name'?: string;
    private 'cve_id'?: string;
    private 'label_list'?: string;
    public status?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public type?: string;
    private 'repair_type'?: string;
    private 'severity_level'?: string;
    private 'repair_priority'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHostVulsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulHostVulsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulHostVulsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulName(vulName: string): ListVulHostVulsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCveId(cveId: string): ListVulHostVulsRequest {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withLabelList(labelList: string): ListVulHostVulsRequest {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: string  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): string | undefined {
        return this['label_list'];
    }
    public withStatus(status: string): ListVulHostVulsRequest {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: string): ListVulHostVulsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ListVulHostVulsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostName(hostName: string): ListVulHostVulsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListVulHostVulsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withType(type: string): ListVulHostVulsRequest {
        this['type'] = type;
        return this;
    }
    public withRepairType(repairType: string): ListVulHostVulsRequest {
        this['repair_type'] = repairType;
        return this;
    }
    public set repairType(repairType: string  | undefined) {
        this['repair_type'] = repairType;
    }
    public get repairType(): string | undefined {
        return this['repair_type'];
    }
    public withSeverityLevel(severityLevel: string): ListVulHostVulsRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withRepairPriority(repairPriority: string): ListVulHostVulsRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
}