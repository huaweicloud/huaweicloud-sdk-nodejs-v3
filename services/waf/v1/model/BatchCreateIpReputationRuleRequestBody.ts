import { BatchCreateIpReputationRuleRequestBodyAction } from './BatchCreateIpReputationRuleRequestBodyAction';


export class BatchCreateIpReputationRuleRequestBody {
    public name?: string;
    public type?: string;
    public tags?: Array<string>;
    public action?: BatchCreateIpReputationRuleRequestBodyAction;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): BatchCreateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): BatchCreateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): BatchCreateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: BatchCreateIpReputationRuleRequestBodyAction): BatchCreateIpReputationRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): BatchCreateIpReputationRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateIpReputationRuleRequestBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}