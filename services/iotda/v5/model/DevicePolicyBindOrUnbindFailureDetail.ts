

export class DevicePolicyBindOrUnbindFailureDetail {
    private 'target_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withTargetId(targetId: string): DevicePolicyBindOrUnbindFailureDetail {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withErrorCode(errorCode: string): DevicePolicyBindOrUnbindFailureDetail {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DevicePolicyBindOrUnbindFailureDetail {
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