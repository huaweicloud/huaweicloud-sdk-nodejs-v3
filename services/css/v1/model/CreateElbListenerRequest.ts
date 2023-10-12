import { CreateEsListenerRequestBody } from './CreateEsListenerRequestBody';


export class CreateElbListenerRequest {
    private 'cluster_id'?: string;
    public body?: CreateEsListenerRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateElbListenerRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateEsListenerRequestBody): CreateElbListenerRequest {
        this['body'] = body;
        return this;
    }
}