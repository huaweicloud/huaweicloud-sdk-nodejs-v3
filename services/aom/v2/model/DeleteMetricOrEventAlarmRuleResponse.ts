import { ItemResult } from './ItemResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMetricOrEventAlarmRuleResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_message'?: string;
    public resources?: Array<ItemResult>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): DeleteMetricOrEventAlarmRuleResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): DeleteMetricOrEventAlarmRuleResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withResources(resources: Array<ItemResult>): DeleteMetricOrEventAlarmRuleResponse {
        this['resources'] = resources;
        return this;
    }
}