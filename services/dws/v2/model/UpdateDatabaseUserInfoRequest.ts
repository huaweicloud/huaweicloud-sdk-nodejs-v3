import { DatabaseUserInfoReq } from './DatabaseUserInfoReq';


export class UpdateDatabaseUserInfoRequest {
    private 'cluster_id': string | undefined;
    public name: string;
    public body?: DatabaseUserInfoReq;
    public constructor(clusterId?: any, name?: any) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): UpdateDatabaseUserInfoRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withName(name: string): UpdateDatabaseUserInfoRequest {
        this['name'] = name;
        return this;
    }
    public withBody(body: DatabaseUserInfoReq): UpdateDatabaseUserInfoRequest {
        this['body'] = body;
        return this;
    }
}