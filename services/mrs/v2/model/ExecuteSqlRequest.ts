import { SqlExecutionReq } from './SqlExecutionReq';


export class ExecuteSqlRequest {
    private 'cluster_id': string | undefined;
    public body?: SqlExecutionReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteSqlRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: SqlExecutionReq): ExecuteSqlRequest {
        this['body'] = body;
        return this;
    }
}