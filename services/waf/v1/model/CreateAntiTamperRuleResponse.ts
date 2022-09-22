
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAntiTamperRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public hostname?: string;
    public url?: string;
    public description?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAntiTamperRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreateAntiTamperRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withHostname(hostname: string): CreateAntiTamperRuleResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): CreateAntiTamperRuleResponse {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): CreateAntiTamperRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateAntiTamperRuleResponse {
        this['status'] = status;
        return this;
    }
}