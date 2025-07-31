

export class ListVulContainersRequest {
    private 'enterprise_project_id'?: string;
    private 'vul_id'?: string;
    public type?: string;
    private 'container_name'?: string;
    private 'cluster_id'?: string;
    public status?: string;
    private 'handle_status'?: string;
    private 'severity_level'?: string;
    private 'min_scan_time'?: number;
    private 'max_scan_time'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(vulId?: string, type?: string) { 
        this['vul_id'] = vulId;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulContainersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVulId(vulId: string): ListVulContainersRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withType(type: string): ListVulContainersRequest {
        this['type'] = type;
        return this;
    }
    public withContainerName(containerName: string): ListVulContainersRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withClusterId(clusterId: string): ListVulContainersRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStatus(status: string): ListVulContainersRequest {
        this['status'] = status;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListVulContainersRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverityLevel(severityLevel: string): ListVulContainersRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withMinScanTime(minScanTime: number): ListVulContainersRequest {
        this['min_scan_time'] = minScanTime;
        return this;
    }
    public set minScanTime(minScanTime: number  | undefined) {
        this['min_scan_time'] = minScanTime;
    }
    public get minScanTime(): number | undefined {
        return this['min_scan_time'];
    }
    public withMaxScanTime(maxScanTime: number): ListVulContainersRequest {
        this['max_scan_time'] = maxScanTime;
        return this;
    }
    public set maxScanTime(maxScanTime: number  | undefined) {
        this['max_scan_time'] = maxScanTime;
    }
    public get maxScanTime(): number | undefined {
        return this['max_scan_time'];
    }
    public withLimit(limit: number): ListVulContainersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulContainersRequest {
        this['offset'] = offset;
        return this;
    }
}