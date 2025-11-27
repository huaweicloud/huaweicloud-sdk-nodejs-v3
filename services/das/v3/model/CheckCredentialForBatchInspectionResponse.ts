
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckCredentialForBatchInspectionResponse extends SdkResponse {
    private 'check_result'?: boolean;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withCheckResult(checkResult: boolean): CheckCredentialForBatchInspectionResponse {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: boolean  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): boolean | undefined {
        return this['check_result'];
    }
    public withErrorMsg(errorMsg: string): CheckCredentialForBatchInspectionResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}