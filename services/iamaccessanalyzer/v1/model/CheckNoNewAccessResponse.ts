import { CheckNoNewAccessReason } from './CheckNoNewAccessReason';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckNoNewAccessResponse extends SdkResponse {
    public message?: string;
    private 'check_result'?: CheckNoNewAccessResponseCheckResultEnum | string;
    public reasons?: Array<CheckNoNewAccessReason>;
    public constructor() { 
        super();
    }
    public withMessage(message: string): CheckNoNewAccessResponse {
        this['message'] = message;
        return this;
    }
    public withCheckResult(checkResult: CheckNoNewAccessResponseCheckResultEnum | string): CheckNoNewAccessResponse {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: CheckNoNewAccessResponseCheckResultEnum | string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): CheckNoNewAccessResponseCheckResultEnum | string | undefined {
        return this['check_result'];
    }
    public withReasons(reasons: Array<CheckNoNewAccessReason>): CheckNoNewAccessResponse {
        this['reasons'] = reasons;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckNoNewAccessResponseCheckResultEnum {
    PASS = 'pass',
    FAIL = 'fail'
}
