
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeFullDeadLockSwitchResponse extends SdkResponse {
    public success?: boolean;
    public status?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ChangeFullDeadLockSwitchResponse {
        this['success'] = success;
        return this;
    }
    public withStatus(status: number): ChangeFullDeadLockSwitchResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): ChangeFullDeadLockSwitchResponse {
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