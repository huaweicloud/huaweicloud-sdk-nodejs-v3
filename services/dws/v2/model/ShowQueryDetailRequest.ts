

export class ShowQueryDetailRequest {
    private 'cluster_id'?: string;
    private 'query_id'?: string;
    public ctime?: number;
    public constructor(clusterId?: string, queryId?: string) { 
        this['cluster_id'] = clusterId;
        this['query_id'] = queryId;
    }
    public withClusterId(clusterId: string): ShowQueryDetailRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withQueryId(queryId: string): ShowQueryDetailRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withCtime(ctime: number): ShowQueryDetailRequest {
        this['ctime'] = ctime;
        return this;
    }
}