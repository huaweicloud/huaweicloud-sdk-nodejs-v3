import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';


export class CreateIpReputationRuleRequestBody {
    public name?: string;
    public description?: string;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    public constructor(name?: string, action?: CreateIpReputationRuleRequestBodyAction, type?: string, tags?: Array<string>) { 
        this['name'] = name;
        this['action'] = action;
        this['type'] = type;
        this['tags'] = tags;
    }
    public withName(name: string): CreateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateIpReputationRuleRequestBody {
        this['description'] = description;
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