
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAntileakageRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public category?: string;
    public contents?: Array<string>;
    public status?: number;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAntileakageRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdateAntileakageRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): UpdateAntileakageRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): UpdateAntileakageRuleResponse {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): UpdateAntileakageRuleResponse {
        this['contents'] = contents;
        return this;
    }
    public withStatus(status: number): UpdateAntileakageRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UpdateAntileakageRuleResponse {
        this['description'] = description;
        return this;
    }
}