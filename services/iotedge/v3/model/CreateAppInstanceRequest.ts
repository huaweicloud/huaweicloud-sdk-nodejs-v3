import { CreateAppInstanceRequestDTO } from './CreateAppInstanceRequestDTO';


export class CreateAppInstanceRequest {
    private 'cluster_id'?: string;
    public body?: CreateAppInstanceRequestDTO;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateAppInstanceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateAppInstanceRequestDTO): CreateAppInstanceRequest {
        this['body'] = body;
        return this;
    }
}