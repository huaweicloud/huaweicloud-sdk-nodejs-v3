import { DatabasePermissionReq } from './DatabasePermissionReq';


export class UpdateDatabaseAuthorityRequest {
    private 'cluster_id'?: string;
    public body?: DatabasePermissionReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateDatabaseAuthorityRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DatabasePermissionReq): UpdateDatabaseAuthorityRequest {
        this['body'] = body;
        return this;
    }
}