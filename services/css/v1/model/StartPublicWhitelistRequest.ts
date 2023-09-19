import { StartPublicWhitelistReq } from './StartPublicWhitelistReq';


export class StartPublicWhitelistRequest {
    private 'cluster_id'?: string;
    public body?: StartPublicWhitelistReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartPublicWhitelistRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartPublicWhitelistReq): StartPublicWhitelistRequest {
        this['body'] = body;
        return this;
    }
}