

export class PauseJobResp {
    public id: string;
    public status: string;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor(id?: any, status?: any) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): PauseJobResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): PauseJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): PauseJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): PauseJobResp {
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