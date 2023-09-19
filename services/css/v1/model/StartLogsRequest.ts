import { StartLogsReq } from './StartLogsReq';


export class StartLogsRequest {
    private 'cluster_id'?: string;
    public body?: StartLogsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: StartLogsReq): StartLogsRequest {
        this['body'] = body;
        return this;
    }
}