

export class ListConfigurationsAuditRecordsRequest {
    private 'cluster_id'?: string;
    private 'action_time'?: number;
    private 'filter_by'?: string;
    public filter?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListConfigurationsAuditRecordsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withActionTime(actionTime: number): ListConfigurationsAuditRecordsRequest {
        this['action_time'] = actionTime;
        return this;
    }
    public set actionTime(actionTime: number  | undefined) {
        this['action_time'] = actionTime;
    }
    public get actionTime(): number | undefined {
        return this['action_time'];
    }
    public withFilterBy(filterBy: string): ListConfigurationsAuditRecordsRequest {
        this['filter_by'] = filterBy;
        return this;
    }
    public set filterBy(filterBy: string  | undefined) {
        this['filter_by'] = filterBy;
    }
    public get filterBy(): string | undefined {
        return this['filter_by'];
    }
    public withFilter(filter: string): ListConfigurationsAuditRecordsRequest {
        this['filter'] = filter;
        return this;
    }
    public withLimit(limit: number): ListConfigurationsAuditRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConfigurationsAuditRecordsRequest {
        this['offset'] = offset;
        return this;
    }
}