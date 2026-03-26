
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetLockBlockingSwitchResponse extends SdkResponse {
    public success?: boolean;
    public status?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetLockBlockingSwitchResponse {
        this['success'] = success;
        return this;
    }
    public withStatus(status: number): SetLockBlockingSwitchResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): SetLockBlockingSwitchResponse {
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