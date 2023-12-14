import { ListQueriesRequestBody } from './ListQueriesRequestBody';


export class ListQueriesRequest {
    private 'cluster_id'?: string;
    public body?: ListQueriesRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListQueriesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ListQueriesRequestBody): ListQueriesRequest {
        this['body'] = body;
        return this;
    }
}