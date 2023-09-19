import { ChangeModeReq } from './ChangeModeReq';


export class ChangeModeRequest {
    private 'cluster_id'?: string;
    public body?: ChangeModeReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ChangeModeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ChangeModeReq): ChangeModeRequest {
        this['body'] = body;
        return this;
    }
}