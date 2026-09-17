

export class ListOperationalTaskRequest {
    private 'cluster_id'?: string;
    private 'time_zone'?: string;
    public type?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListOperationalTaskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTimeZone(timeZone: string): ListOperationalTaskRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withType(type: string): ListOperationalTaskRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListOperationalTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOperationalTaskRequest {
        this['offset'] = offset;
        return this;
    }
}