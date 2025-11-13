import { UpdateIpReputationRuleRequestBodyAction } from './UpdateIpReputationRuleRequestBodyAction';


export class CreateIpReputationRuleRequestBody {
    public name?: string;
    public policyname?: string;
    public description?: string;
    public status?: number;
    public action?: UpdateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    public constructor(name?: string, action?: UpdateIpReputationRuleRequestBodyAction, type?: string, tags?: Array<string>) { 
        this['name'] = name;
        this['action'] = action;
        this['type'] = type;
        this['tags'] = tags;
    }
    public withName(name: string): CreateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): CreateIpReputationRuleRequestBody {
        this['policyname'] = policyname;
        return this;
    }
    public withDescription(description: string): CreateIpReputationRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateIpReputationRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withAction(action: UpdateIpReputationRuleRequestBodyAction): CreateIpReputationRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withType(type: string): CreateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): CreateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
}