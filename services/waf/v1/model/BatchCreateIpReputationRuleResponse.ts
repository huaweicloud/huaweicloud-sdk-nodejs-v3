import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIpReputationRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public policyname?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public type?: string;
    public tags?: Array<string>;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreateIpReputationRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateIpReputationRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): BatchCreateIpReputationRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): BatchCreateIpReputationRuleResponse {
        this['policyname'] = policyname;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateIpReputationRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): BatchCreateIpReputationRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchCreateIpReputationRuleResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: string): BatchCreateIpReputationRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): BatchCreateIpReputationRuleResponse {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: CreateIpReputationRuleRequestBodyAction): BatchCreateIpReputationRuleResponse {
        this['action'] = action;
        return this;
    }
}