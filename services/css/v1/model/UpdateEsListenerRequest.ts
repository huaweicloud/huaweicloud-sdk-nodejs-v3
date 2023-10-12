import { UpdateEsListenerRequestBody } from './UpdateEsListenerRequestBody';


export class UpdateEsListenerRequest {
    private 'cluster_id'?: string;
    private 'listener_id'?: string;
    public body?: UpdateEsListenerRequestBody;
    public constructor(clusterId?: string, listenerId?: string) { 
        this['cluster_id'] = clusterId;
        this['listener_id'] = listenerId;
    }
    public withClusterId(clusterId: string): UpdateEsListenerRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withListenerId(listenerId: string): UpdateEsListenerRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withBody(body: UpdateEsListenerRequestBody): UpdateEsListenerRequest {
        this['body'] = body;
        return this;
    }
}