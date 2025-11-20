import { LeakageListInfoAction } from './LeakageListInfoAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateAntileakageRuleResponse extends SdkResponse {
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
    public withId(id: string): BatchCreateAntileakageRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateAntileakageRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): BatchCreateAntileakageRuleResponse {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): BatchCreateAntileakageRuleResponse {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): BatchCreateAntileakageRuleResponse {
        this['contents'] = contents;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateAntileakageRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): BatchCreateAntileakageRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchCreateAntileakageRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: LeakageListInfoAction): BatchCreateAntileakageRuleResponse {
        this['action'] = action;
        return this;
    }
}