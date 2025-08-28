import { UpdateIpReputationRuleRequestBodyAction } from './UpdateIpReputationRuleRequestBodyAction';


export class UpdateIpReputationRuleRequestBody {
    public name?: string;
    public policyname?: string;
    public description?: string;
    public action?: UpdateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): UpdateIpReputationRuleRequestBody {
        this['policyname'] = policyname;
        return this;
    }
    public withDescription(description: string): UpdateIpReputationRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withAction(action: UpdateIpReputationRuleRequestBodyAction): UpdateIpReputationRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withType(type: string): UpdateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): UpdateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
}