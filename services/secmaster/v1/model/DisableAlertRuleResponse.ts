import { AlertRule } from './AlertRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableAlertRuleResponse extends SdkResponse {
    private 'fail_list'?: Array<AlertRule>;
    private 'success_list'?: Array<AlertRule>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withFailList(failList: Array<AlertRule>): DisableAlertRuleResponse {
        this['fail_list'] = failList;
        return this;
    }
    public set failList(failList: Array<AlertRule>  | undefined) {
        this['fail_list'] = failList;
    }
    public get failList(): Array<AlertRule> | undefined {
        return this['fail_list'];
    }
    public withSuccessList(successList: Array<AlertRule>): DisableAlertRuleResponse {
        this['success_list'] = successList;
        return this;
    }
    public set successList(successList: Array<AlertRule>  | undefined) {
        this['success_list'] = successList;
    }
    public get successList(): Array<AlertRule> | undefined {
        return this['success_list'];
    }
    public withXRequestId(xRequestId: string): DisableAlertRuleResponse {
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