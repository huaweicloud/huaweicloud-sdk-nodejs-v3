import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';


export class BatchCreateIpReputationRuleRequestBody {
    public name?: string;
    public type?: BatchCreateIpReputationRuleRequestBodyTypeEnum | string;
    public tags?: Array<string>;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(name?: string, type?: string, tags?: Array<string>, action?: CreateIpReputationRuleRequestBodyAction, policyIds?: Array<string>) { 
        this['name'] = name;
        this['type'] = type;
        this['tags'] = tags;
        this['action'] = action;
        this['policy_ids'] = policyIds;
    }
    public withName(name: string): BatchCreateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: BatchCreateIpReputationRuleRequestBodyTypeEnum | string): BatchCreateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): BatchCreateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: CreateIpReputationRuleRequestBodyAction): BatchCreateIpReputationRuleRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateIpReputationRuleRequestBodyTypeEnum {
    IDC = 'idc'
}
