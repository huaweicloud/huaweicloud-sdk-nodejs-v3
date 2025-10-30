

export class ListUrgentVulnerabilitiesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'severity_level'?: string;
    private 'handle_status'?: string;
    private 'vul_name'?: string;
    private 'is_container'?: boolean;
    private 'cluster_id'?: string;
    private 'min_scan_time'?: number;
    private 'max_scan_time'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListUrgentVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListUrgentVulnerabilitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUrgentVulnerabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSeverityLevel(severityLevel: string): ListUrgentVulnerabilitiesRequest {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withHandleStatus(handleStatus: string): ListUrgentVulnerabilitiesRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withVulName(vulName: string): ListUrgentVulnerabilitiesRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withIsContainer(isContainer: boolean): ListUrgentVulnerabilitiesRequest {
        this['is_container'] = isContainer;
        return this;
    }
    public set isContainer(isContainer: boolean  | undefined) {
        this['is_container'] = isContainer;
    }
    public get isContainer(): boolean | undefined {
        return this['is_container'];
    }
    public withClusterId(clusterId: string): ListUrgentVulnerabilitiesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withMinScanTime(minScanTime: number): ListUrgentVulnerabilitiesRequest {
        this['min_scan_time'] = minScanTime;
        return this;
    }
    public set minScanTime(minScanTime: number  | undefined) {
        this['min_scan_time'] = minScanTime;
    }
    public get minScanTime(): number | undefined {
        return this['min_scan_time'];
    }
    public withMaxScanTime(maxScanTime: number): ListUrgentVulnerabilitiesRequest {
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