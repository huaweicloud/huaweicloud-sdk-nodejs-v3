import { DatabaseUserInfoReq } from './DatabaseUserInfoReq';


export class UpdateDatabaseUserInfoRequest {
    private 'cluster_id'?: string;
    public name?: string;
    public body?: DatabaseUserInfoReq;
    public constructor(clusterId?: string, name?: string) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): UpdateDatabaseUserInfoRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
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