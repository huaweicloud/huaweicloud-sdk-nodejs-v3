

export class SyncPolicyResp {
    public id?: string;
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): SyncPolicyResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SyncPolicyResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): SyncPolicyResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): SyncPolicyResp {
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