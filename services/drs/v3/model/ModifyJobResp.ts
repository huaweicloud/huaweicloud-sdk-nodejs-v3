

export class ModifyJobResp {
    public id?: string;
    public status?: ModifyJobRespStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): ModifyJobResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ModifyJobRespStatusEnum | string): ModifyJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ModifyJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ModifyJobResp {
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

/**
    * @export
    * @enum {string}
    */
export enum ModifyJobRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
