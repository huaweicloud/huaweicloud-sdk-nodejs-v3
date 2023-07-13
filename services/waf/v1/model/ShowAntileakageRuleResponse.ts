
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntileakageRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public category?: string;
    public contents?: Array<string>;
    public timestamp?: number;
    public status?: number;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAntileakageRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowAntileakageRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): ShowAntileakageRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): ShowAntileakageRuleResponse {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): ShowAntileakageRuleResponse {
        this['contents'] = contents;
        return this;
    }
    public withTimestamp(timestamp: number): ShowAntileakageRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): ShowAntileakageRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ShowAntileakageRuleResponse {
        this['description'] = description;
        return this;
    }
}