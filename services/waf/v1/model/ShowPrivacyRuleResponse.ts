
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivacyRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public url?: string;
    public category?: string;
    public index?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPrivacyRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowPrivacyRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPrivacyRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): ShowPrivacyRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ShowPrivacyRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): ShowPrivacyRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): ShowPrivacyRuleResponse {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): ShowPrivacyRuleResponse {
        this['index'] = index;
        return this;
    }
}