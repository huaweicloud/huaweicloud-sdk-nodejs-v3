
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAntileakageRuleResponse extends SdkResponse {
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
    public withId(id: string): DeleteAntileakageRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteAntileakageRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): DeleteAntileakageRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): DeleteAntileakageRuleResponse {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): DeleteAntileakageRuleResponse {
        this['contents'] = contents;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteAntileakageRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): DeleteAntileakageRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): DeleteAntileakageRuleResponse {
        this['description'] = description;
        return this;
    }
}