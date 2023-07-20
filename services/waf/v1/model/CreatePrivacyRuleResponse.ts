
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrivacyRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public status?: number;
    public url?: string;
    public category?: CreatePrivacyRuleResponseCategoryEnum | string;
    public index?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePrivacyRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreatePrivacyRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): CreatePrivacyRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): CreatePrivacyRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): CreatePrivacyRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: CreatePrivacyRuleResponseCategoryEnum | string): CreatePrivacyRuleResponse {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): CreatePrivacyRuleResponse {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): CreatePrivacyRuleResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePrivacyRuleResponseCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
