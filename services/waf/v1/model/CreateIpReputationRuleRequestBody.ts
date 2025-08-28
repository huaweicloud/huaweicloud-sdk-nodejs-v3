import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';


export class CreateIpReputationRuleRequestBody {
    public name?: string;
    public policyname?: string;
    public description?: string;
    public status?: number;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    public constructor() { 
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
    public withAction(action: CreateIpReputationRuleRequestBodyAction): CreateIpReputationRuleRequestBody {
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