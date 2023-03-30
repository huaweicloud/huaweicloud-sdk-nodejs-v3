
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntitamperRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public hostname?: string;
    public url?: string;
    public description?: string;
    public status?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAntitamperRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowAntitamperRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withHostname(hostname: string): ShowAntitamperRuleResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): ShowAntitamperRuleResponse {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): ShowAntitamperRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ShowAntitamperRuleResponse {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): ShowAntitamperRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}