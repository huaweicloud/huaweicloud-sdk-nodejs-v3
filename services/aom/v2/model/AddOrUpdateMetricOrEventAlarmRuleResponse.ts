import { AddOrUpdateAlarmRuleV4ItemResult } from './AddOrUpdateAlarmRuleV4ItemResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrUpdateMetricOrEventAlarmRuleResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'alarm_rules'?: Array<AddOrUpdateAlarmRuleV4ItemResult>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): AddOrUpdateMetricOrEventAlarmRuleResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): AddOrUpdateMetricOrEventAlarmRuleResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withAlarmRules(alarmRules: Array<AddOrUpdateAlarmRuleV4ItemResult>): AddOrUpdateMetricOrEventAlarmRuleResponse {
        this['alarm_rules'] = alarmRules;
        return this;
    }
    public set alarmRules(alarmRules: Array<AddOrUpdateAlarmRuleV4ItemResult>  | undefined) {
        this['alarm_rules'] = alarmRules;
    }
    public get alarmRules(): Array<AddOrUpdateAlarmRuleV4ItemResult> | undefined {
        return this['alarm_rules'];
    }
}