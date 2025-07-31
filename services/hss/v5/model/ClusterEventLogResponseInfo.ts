

export class ClusterEventLogResponseInfo {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public time?: number;
    public namespace?: string;
    private 'event_name'?: string;
    private 'event_type'?: string;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    public reason?: string;
    private 'line_num'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ClusterEventLogResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ClusterEventLogResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ClusterEventLogResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withTime(time: number): ClusterEventLogResponseInfo {
        this['time'] = time;
        return this;
    }
    public withNamespace(namespace: string): ClusterEventLogResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withEventName(eventName: string): ClusterEventLogResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: string): ClusterEventLogResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withResourceType(resourceType: string): ClusterEventLogResponseInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): ClusterEventLogResponseInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withReason(reason: string): ClusterEventLogResponseInfo {
        this['reason'] = reason;
        return this;
    }
    public withLineNum(lineNum: string): ClusterEventLogResponseInfo {
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