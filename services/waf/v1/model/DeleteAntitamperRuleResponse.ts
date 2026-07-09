
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAntitamperRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public timestamp?: number;
    public hostname?: string;
    public status?: string;
    public description?: string;
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
    public withHostname(hostname: string): DeleteAntitamperRuleResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withStatus(status: string): DeleteAntitamperRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): DeleteAntitamperRuleResponse {
        this['description'] = description;
        return this;
    }
}