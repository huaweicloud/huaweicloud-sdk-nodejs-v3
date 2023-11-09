import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlaybookRuleResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: RuleInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowPlaybookRuleResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowPlaybookRuleResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: RuleInfo): ShowPlaybookRuleResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowPlaybookRuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}