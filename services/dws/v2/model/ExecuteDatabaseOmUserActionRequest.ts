import { DatabaseOmUserActionReq } from './DatabaseOmUserActionReq';


export class ExecuteDatabaseOmUserActionRequest {
    private 'cluster_id'?: string;
    public body?: DatabaseOmUserActionReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteDatabaseOmUserActionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DatabaseOmUserActionReq): ExecuteDatabaseOmUserActionRequest {
        this['body'] = body;
        return this;
    }
}