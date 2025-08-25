import { AuthorizeAccessKeysRequestBody } from './AuthorizeAccessKeysRequestBody';


export class AuthorizeAccessKeysRequest {
    private 'cluster_id'?: string;
    public body?: AuthorizeAccessKeysRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AuthorizeAccessKeysRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AuthorizeAccessKeysRequestBody): AuthorizeAccessKeysRequest {
        this['body'] = body;
        return this;
    }
}