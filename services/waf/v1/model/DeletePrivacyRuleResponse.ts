
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePrivacyRuleResponse extends SdkResponse {
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
    public withId(id: string): DeletePrivacyRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeletePrivacyRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): DeletePrivacyRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): DeletePrivacyRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): DeletePrivacyRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): DeletePrivacyRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): DeletePrivacyRuleResponse {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): DeletePrivacyRuleResponse {
        this['index'] = index;
        return this;
    }
}