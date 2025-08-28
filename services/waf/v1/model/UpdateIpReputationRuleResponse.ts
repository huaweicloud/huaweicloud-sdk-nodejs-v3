import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpReputationRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public policyname?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public isp?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateIpReputationRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateIpReputationRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): UpdateIpReputationRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): UpdateIpReputationRuleResponse {
        this['policyname'] = policyname;
        return this;
    }
    public withTimestamp(timestamp: number): UpdateIpReputationRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): UpdateIpReputationRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdateIpReputationRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: CreateIpReputationRuleRequestBodyAction): UpdateIpReputationRuleResponse {
        this['action'] = action;
        return this;
    }
    public withIsp(isp: string): UpdateIpReputationRuleResponse {
        this['isp'] = isp;
        return this;
    }
}