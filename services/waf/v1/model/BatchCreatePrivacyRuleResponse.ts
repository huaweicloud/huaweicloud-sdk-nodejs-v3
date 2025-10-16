
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreatePrivacyRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public status?: number;
    public url?: string;
    public category?: BatchCreatePrivacyRuleResponseCategoryEnum | string;
    public index?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreatePrivacyRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreatePrivacyRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreatePrivacyRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): BatchCreatePrivacyRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): BatchCreatePrivacyRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: BatchCreatePrivacyRuleResponseCategoryEnum | string): BatchCreatePrivacyRuleResponse {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): BatchCreatePrivacyRuleResponse {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): BatchCreatePrivacyRuleResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreatePrivacyRuleResponseCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
