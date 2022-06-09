import { L7Rule } from './L7Rule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateL7RuleResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public rule?: L7Rule;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateL7RuleResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withRule(rule: L7Rule): UpdateL7RuleResponse {
        this['rule'] = rule;
        return this;
    }
}