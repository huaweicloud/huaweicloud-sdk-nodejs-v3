import { StartVpecpReq } from './StartVpecpReq';


export class StartVpecpRequest {
    private 'cluster_id'?: string;
    public body?: StartVpecpReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartVpecpRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartVpecpReq): StartVpecpRequest {
        this['body'] = body;
        return this;
    }
}