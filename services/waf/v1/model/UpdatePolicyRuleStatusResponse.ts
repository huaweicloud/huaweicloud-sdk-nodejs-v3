
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyRuleStatusResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePolicyRuleStatusResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdatePolicyRuleStatusResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): UpdatePolicyRuleStatusResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): UpdatePolicyRuleStatusResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdatePolicyRuleStatusResponse {
        this['status'] = status;
        return this;
    }
}