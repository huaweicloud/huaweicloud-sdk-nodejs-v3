import { DeAuthorizeAccessKeysRequestBody } from './DeAuthorizeAccessKeysRequestBody';


export class CancelAuthorizeAccessKeysRequest {
    private 'cluster_id'?: string;
    public body?: DeAuthorizeAccessKeysRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CancelAuthorizeAccessKeysRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DeAuthorizeAccessKeysRequestBody): CancelAuthorizeAccessKeysRequest {
        this['body'] = body;
        return this;
    }
}