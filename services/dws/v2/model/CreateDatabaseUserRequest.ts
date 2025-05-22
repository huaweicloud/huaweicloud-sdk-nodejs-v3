import { UserAuthorityReq } from './UserAuthorityReq';


export class CreateDatabaseUserRequest {
    private 'cluster_id'?: string;
    public body?: UserAuthorityReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateDatabaseUserRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UserAuthorityReq): CreateDatabaseUserRequest {
        this['body'] = body;
        return this;
    }
}