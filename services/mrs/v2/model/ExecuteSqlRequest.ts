import { SqlExecutionReq } from './SqlExecutionReq';


export class ExecuteSqlRequest {
    private 'cluster_id'?: string;
    public body?: SqlExecutionReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteSqlRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: SqlExecutionReq): ExecuteSqlRequest {
        this['body'] = body;
        return this;
    }
}