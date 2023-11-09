
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableAlertRuleResponse extends SdkResponse {
    private 'rule_id'?: string;
    public status?: EnableAlertRuleResponseStatusEnum | string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): EnableAlertRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withStatus(status: EnableAlertRuleResponseStatusEnum | string): EnableAlertRuleResponse {
        this['status'] = status;
        return this;
    }
    public withXRequestId(xRequestId: string): EnableAlertRuleResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum EnableAlertRuleResponseStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
