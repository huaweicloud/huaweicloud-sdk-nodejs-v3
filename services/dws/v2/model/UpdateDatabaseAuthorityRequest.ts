import { DatabasePermissionReq } from './DatabasePermissionReq';


export class UpdateDatabaseAuthorityRequest {
    private 'cluster_id': string | undefined;
    public body?: DatabasePermissionReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateDatabaseAuthorityRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: DatabasePermissionReq): UpdateDatabaseAuthorityRequest {
        this['body'] = body;
        return this;
    }
}