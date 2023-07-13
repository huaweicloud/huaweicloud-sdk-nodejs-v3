import { ResetPasswordRequestBody } from './ResetPasswordRequestBody';


export class ResetPasswordRequest {
    private 'cluster_id': string | undefined;
    public body?: ResetPasswordRequestBody;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResetPasswordRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: ResetPasswordRequestBody): ResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}