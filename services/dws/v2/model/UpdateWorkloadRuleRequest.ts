import { AddExceptRuleReq } from './AddExceptRuleReq';


export class UpdateWorkloadRuleRequest {
    private 'cluster_id'?: string;
    private 'rule_name'?: string;
    public body?: AddExceptRuleReq;
    public constructor(clusterId?: string, ruleName?: string) { 
        this['cluster_id'] = clusterId;
        this['rule_name'] = ruleName;
    }
    public withClusterId(clusterId: string): UpdateWorkloadRuleRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withRuleName(ruleName: string): UpdateWorkloadRuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withBody(body: AddExceptRuleReq): UpdateWorkloadRuleRequest {
        this['body'] = body;
        return this;
    }
}