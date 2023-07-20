import { ExpandInstanceStorage } from './ExpandInstanceStorage';


export class ExpandInstanceStorageRequest {
    private 'cluster_id'?: string;
    public body?: ExpandInstanceStorage;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExpandInstanceStorageRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ExpandInstanceStorage): ExpandInstanceStorageRequest {
        this['body'] = body;
        return this;
    }
}