

export class ListClusterEventLogsRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public namespace?: string;
    private 'event_name'?: string;
    private 'event_type'?: string;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    public reason?: string;
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
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterEventLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): ListClusterEventLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListClusterEventLogsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNamespace(namespace: string): ListClusterEventLogsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withEventName(eventName: string): ListClusterEventLogsRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: string): ListClusterEventLogsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withResourceType(resourceType: string): ListClusterEventLogsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): ListClusterEventLogsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withReason(reason: string): ListClusterEventLogsRequest {
        this['reason'] = reason;
        return this;
    }
    public withStartTime(startTime: number): ListClusterEventLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListClusterEventLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListClusterEventLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClusterEventLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLineNum(lineNum: string): ListClusterEventLogsRequest {
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