
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateParamsResponse extends SdkResponse {
    public success?: boolean;
    private 'should_restart'?: UpdateParamsResponseShouldRestartEnum | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateParamsResponse {
        this['success'] = success;
        return this;
    }
    public withShouldRestart(shouldRestart: UpdateParamsResponseShouldRestartEnum): UpdateParamsResponse {
        this['should_restart'] = shouldRestart;
        return this;
    }
    public set shouldRestart(shouldRestart: UpdateParamsResponseShouldRestartEnum | undefined) {
        this['should_restart'] = shouldRestart;
    }
    public get shouldRestart() {
        return this['should_restart'];
    }
    public withErrorCode(errorCode: string): UpdateParamsResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UpdateParamsResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateParamsResponseShouldRestartEnum {
    TRUE = 'true',
    FALSE = 'false'
}
