

export class ListClusterAuditLogsRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_ip'?: string;
    public verb?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    private 'line_num'?: string;
    public constructor(clusterId?: string, startTime?: number, endTime?: number, limit?: number, offset?: number) { 
        this['cluster_id'] = clusterId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterAuditLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): ListClusterAuditLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListClusterAuditLogsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withHostName(hostName: string): ListClusterAuditLogsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListClusterAuditLogsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): ListClusterAuditLogsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withVerb(verb: string): ListClusterAuditLogsRequest {
        this['verb'] = verb;
        return this;
    }
    public withStartTime(startTime: number): ListClusterAuditLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListClusterAuditLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListClusterAuditLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClusterAuditLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLineNum(lineNum: string): ListClusterAuditLogsRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}