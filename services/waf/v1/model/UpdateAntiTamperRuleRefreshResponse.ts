
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAntiTamperRuleRefreshResponse extends SdkResponse {
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
    public withId(id: string): UpdateAntiTamperRuleRefreshResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateAntiTamperRuleRefreshResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withHostname(hostname: string): UpdateAntiTamperRuleRefreshResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): UpdateAntiTamperRuleRefreshResponse {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): UpdateAntiTamperRuleRefreshResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): UpdateAntiTamperRuleRefreshResponse {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): UpdateAntiTamperRuleRefreshResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}