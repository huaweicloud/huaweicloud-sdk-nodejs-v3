import { AddExceptRuleReq } from './AddExceptRuleReq';


export class AddWorkloadRuleRequest {
    private 'cluster_id'?: string;
    public body?: AddExceptRuleReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AddWorkloadRuleRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AddExceptRuleReq): AddWorkloadRuleRequest {
        this['body'] = body;
        return this;
    }
}