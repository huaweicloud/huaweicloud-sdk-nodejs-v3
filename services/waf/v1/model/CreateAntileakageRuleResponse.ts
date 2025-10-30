import { LeakageListInfoAction } from './LeakageListInfoAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAntileakageRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public category?: string;
    public contents?: Array<string>;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public action?: LeakageListInfoAction;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAntileakageRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreateAntileakageRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): CreateAntileakageRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): CreateAntileakageRuleResponse {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): CreateAntileakageRuleResponse {
        this['contents'] = contents;
        return this;
    }
    public withTimestamp(timestamp: number): CreateAntileakageRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): CreateAntileakageRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateAntileakageRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: LeakageListInfoAction): CreateAntileakageRuleResponse {
        this['action'] = action;
        return this;
    }
}