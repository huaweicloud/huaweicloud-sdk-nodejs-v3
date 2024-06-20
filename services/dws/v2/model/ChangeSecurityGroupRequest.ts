import { ChangeSecurityGroupRequestBody } from './ChangeSecurityGroupRequestBody';


export class ChangeSecurityGroupRequest {
    private 'cluster_id'?: string;
    public body?: ChangeSecurityGroupRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ChangeSecurityGroupRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ChangeSecurityGroupRequestBody): ChangeSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}