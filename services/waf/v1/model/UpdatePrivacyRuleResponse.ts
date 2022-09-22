
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivacyRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public status?: number;
    public url?: string;
    public category?: UpdatePrivacyRuleResponseCategoryEnum;
    public index?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePrivacyRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdatePrivacyRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): UpdatePrivacyRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): UpdatePrivacyRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): UpdatePrivacyRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: UpdatePrivacyRuleResponseCategoryEnum): UpdatePrivacyRuleResponse {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): UpdatePrivacyRuleResponse {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): UpdatePrivacyRuleResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePrivacyRuleResponseCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
