
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangePaymentModeNewResponse extends SdkResponse {
    public success?: boolean;
    private 'can_set_free_time'?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ChangePaymentModeNewResponse {
        this['success'] = success;
        return this;
    }
    public withCanSetFreeTime(canSetFreeTime: number): ChangePaymentModeNewResponse {
        this['can_set_free_time'] = canSetFreeTime;
        return this;
    }
    public set canSetFreeTime(canSetFreeTime: number  | undefined) {
        this['can_set_free_time'] = canSetFreeTime;
    }
    public get canSetFreeTime(): number | undefined {
        return this['can_set_free_time'];
    }
    public withErrorMsg(errorMsg: string): ChangePaymentModeNewResponse {
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