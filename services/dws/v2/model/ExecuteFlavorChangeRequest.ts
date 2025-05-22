import { SpecResizeRequest } from './SpecResizeRequest';


export class ExecuteFlavorChangeRequest {
    private 'cluster_id'?: string;
    public body?: SpecResizeRequest;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExecuteFlavorChangeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: SpecResizeRequest): ExecuteFlavorChangeRequest {
        this['body'] = body;
        return this;
    }
}