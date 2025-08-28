import { DeleteIpReputationRuleResponseBodyAction } from './DeleteIpReputationRuleResponseBodyAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpReputationRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public type?: string;
    public tags?: Array<string>;
    public action?: DeleteIpReputationRuleResponseBodyAction;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteIpReputationRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteIpReputationRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): DeleteIpReputationRuleResponse {
        this['name'] = name;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteIpReputationRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): DeleteIpReputationRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): DeleteIpReputationRuleResponse {
        this['status'] = status;
        return this;
    }
    public withType(type: string): DeleteIpReputationRuleResponse {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): DeleteIpReputationRuleResponse {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: DeleteIpReputationRuleResponseBodyAction): DeleteIpReputationRuleResponse {
        this['action'] = action;
        return this;
    }
}