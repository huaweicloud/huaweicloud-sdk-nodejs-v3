

export class StartJobResp {
    public id?: string;
    public status?: StartJobRespStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StartJobResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: StartJobRespStatusEnum | string): StartJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): StartJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): StartJobResp {
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
export enum StartJobRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
