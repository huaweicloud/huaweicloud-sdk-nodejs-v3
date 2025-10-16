import { ExpandPreparationRequestBody } from './ExpandPreparationRequestBody';


export class ResizePreparationRequest {
    private 'cluster_id'?: string;
    public body?: ExpandPreparationRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResizePreparationRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ExpandPreparationRequestBody): ResizePreparationRequest {
        this['body'] = body;
        return this;
    }
}