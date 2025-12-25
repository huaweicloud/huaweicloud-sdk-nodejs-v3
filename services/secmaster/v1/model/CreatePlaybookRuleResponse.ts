import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePlaybookRuleResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: RuleInfo;
    private 'X-request-id'?: string;
    private 'X-API-Deprecation-Info'?: string;
    private 'X-API-Deprecation-Date'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreatePlaybookRuleResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreatePlaybookRuleResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: RuleInfo): CreatePlaybookRuleResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreatePlaybookRuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
    public withXAPIDeprecationInfo(xAPIDeprecationInfo: string): CreatePlaybookRuleResponse {
        this['X-API-Deprecation-Info'] = xAPIDeprecationInfo;
        return this;
    }
    public set xAPIDeprecationInfo(xAPIDeprecationInfo: string  | undefined) {
        this['X-API-Deprecation-Info'] = xAPIDeprecationInfo;
    }
    public get xAPIDeprecationInfo(): string | undefined {
        return this['X-API-Deprecation-Info'];
    }
    public withXAPIDeprecationDate(xAPIDeprecationDate: string): CreatePlaybookRuleResponse {
        this['X-API-Deprecation-Date'] = xAPIDeprecationDate;
        return this;
    }
    public set xAPIDeprecationDate(xAPIDeprecationDate: string  | undefined) {
        this['X-API-Deprecation-Date'] = xAPIDeprecationDate;
    }
    public get xAPIDeprecationDate(): string | undefined {
        return this['X-API-Deprecation-Date'];
    }
}