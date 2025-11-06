import { IpReputationRulesListInfoAction } from './IpReputationRulesListInfoAction';


export class IpReputationRulesListInfo {
    public name?: string;
    public id?: string;
    public policyid?: string;
    public type?: string;
    public description?: string;
    public tags?: Array<string>;
    public status?: number;
    public action?: IpReputationRulesListInfoAction;
    public constructor() { 
    }
    public withName(name: string): IpReputationRulesListInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): IpReputationRulesListInfo {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): IpReputationRulesListInfo {
        this['policyid'] = policyid;
        return this;
    }
    public withType(type: string): IpReputationRulesListInfo {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): IpReputationRulesListInfo {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): IpReputationRulesListInfo {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: number): IpReputationRulesListInfo {
        this['status'] = status;
        return this;
    }
    public withAction(action: IpReputationRulesListInfoAction): IpReputationRulesListInfo {
        this['action'] = action;
        return this;
    }
}