import { RollingRestartReq } from './RollingRestartReq';


export class RollingRestartRequest {
    private 'cluster_id'?: string;
    public body?: RollingRestartReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): RollingRestartRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RollingRestartReq): RollingRestartRequest {
        this['body'] = body;
        return this;
    }
}