import { RotateKeyRequestBody } from './RotateKeyRequestBody';


export class RotateKeyRequest {
    private 'cluster_id'?: string;
    public body?: RotateKeyRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): RotateKeyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RotateKeyRequestBody): RotateKeyRequest {
        this['body'] = body;
        return this;
    }
}