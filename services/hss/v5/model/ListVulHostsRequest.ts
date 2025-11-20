

export class ListVulHostsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'vul_id'?: string;
    public type?: string;
    public status?: string;
    private 'asset_value'?: string;
    private 'group_name'?: string;
    private 'handle_status'?: string;
    private 'severity_level'?: string;
    private 'is_affect_business'?: boolean;
    private 'repair_priority'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'is_container'?: boolean;
    private 'container_name'?: string;
    private 'min_scan_time'?: number;
    private 'max_scan_time'?: number;
    public constructor(vulId?: string, type?: string) { 
        this['vul_id'] = vulId;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulHostsRequest {
        this['offset'] = offset;
        return this;
    }
    public withHostName(hostName: string): ListVulHostsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListVulHostsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withVulId(vulId: string): ListVulHostsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withType(type: string): ListVulHostsRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListVulHostsRequest {
        this['status'] = status;
        return this;
    }
    public withAssetValue(assetValue: string): ListVulHostsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withGroupName(groupName: string): ListVulHostsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHandleStatus(handleStatus: string): ListVulHostsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverityLevel(severityLevel: string): ListVulHostsRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withIsAffectBusiness(isAffectBusiness: boolean): ListVulHostsRequest {
        this['is_affect_business'] = isAffectBusiness;
        return this;
    }
    public set isAffectBusiness(isAffectBusiness: boolean  | undefined) {
        this['is_affect_business'] = isAffectBusiness;
    }
    public get isAffectBusiness(): boolean | undefined {
        return this['is_affect_business'];
    }
    public withRepairPriority(repairPriority: string): ListVulHostsRequest {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withClusterName(clusterName: string): ListVulHostsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ListVulHostsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withIsContainer(isContainer: boolean): ListVulHostsRequest {
        this['is_container'] = isContainer;
        return this;
    }
    public set isContainer(isContainer: boolean  | undefined) {
        this['is_container'] = isContainer;
    }
    public get isContainer(): boolean | undefined {
        return this['is_container'];
    }
    public withContainerName(containerName: string): ListVulHostsRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withMinScanTime(minScanTime: number): ListVulHostsRequest {
        this['min_scan_time'] = minScanTime;
        return this;
    }
    public set minScanTime(minScanTime: number  | undefined) {
        this['min_scan_time'] = minScanTime;
    }
    public get minScanTime(): number | undefined {
        return this['min_scan_time'];
    }
    public withMaxScanTime(maxScanTime: number): ListVulHostsRequest {
        this['max_scan_time'] = maxScanTime;
        return this;
    }
    public set maxScanTime(maxScanTime: number  | undefined) {
        this['max_scan_time'] = maxScanTime;
    }
    public get maxScanTime(): number | undefined {
        return this['max_scan_time'];
    }
}