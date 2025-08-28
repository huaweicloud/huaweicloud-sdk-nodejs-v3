import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmIpReputationRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public type?: string;
    public tags?: Array<string>;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public constructor() { 
        super();
    }
    public withId(id: string): ConfirmIpReputationRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ConfirmIpReputationRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): ConfirmIpReputationRuleResponse {
        this['name'] = name;
        return this;
    }
    public withTimestamp(timestamp: number): ConfirmIpReputationRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): ConfirmIpReputationRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ConfirmIpReputationRuleResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ConfirmIpReputationRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): ConfirmIpReputationRuleResponse {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: CreateIpReputationRuleRequestBodyAction): ConfirmIpReputationRuleResponse {
        this['action'] = action;
        return this;
    }
}