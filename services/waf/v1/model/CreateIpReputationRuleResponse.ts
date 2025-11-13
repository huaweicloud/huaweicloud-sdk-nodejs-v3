import { CreateIpReputationRuleResponseBodyAction } from './CreateIpReputationRuleResponseBodyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpReputationRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public policyname?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public type?: string;
    public tags?: Array<string>;
    public action?: CreateIpReputationRuleResponseBodyAction;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateIpReputationRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreateIpReputationRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): CreateIpReputationRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): CreateIpReputationRuleResponse {
        this['policyname'] = policyname;
        return this;
    }
    public withTimestamp(timestamp: number): CreateIpReputationRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): CreateIpReputationRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateIpReputationRuleResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: string): CreateIpReputationRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): CreateIpReputationRuleResponse {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: CreateIpReputationRuleResponseBodyAction): CreateIpReputationRuleResponse {
        this['action'] = action;
        return this;
    }
}