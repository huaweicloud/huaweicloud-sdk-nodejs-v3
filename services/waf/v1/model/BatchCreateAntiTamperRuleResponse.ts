
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateAntiTamperRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public hostname?: string;
    public url?: string;
    public description?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreateAntiTamperRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateAntiTamperRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withHostname(hostname: string): BatchCreateAntiTamperRuleResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): BatchCreateAntiTamperRuleResponse {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): BatchCreateAntiTamperRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchCreateAntiTamperRuleResponse {
        this['status'] = status;
        return this;
    }
}