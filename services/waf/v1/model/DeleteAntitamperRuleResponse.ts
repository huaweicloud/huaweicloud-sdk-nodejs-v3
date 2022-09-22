
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAntitamperRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteAntitamperRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteAntitamperRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): DeleteAntitamperRuleResponse {
        this['url'] = url;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteAntitamperRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}