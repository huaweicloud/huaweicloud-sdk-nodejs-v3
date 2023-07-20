

export class CheckJobResp {
    public id?: string;
    public status?: CheckJobRespStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public success?: boolean;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): CheckJobResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CheckJobRespStatusEnum | string): CheckJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): CheckJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CheckJobResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSuccess(success: boolean): CheckJobResp {
        this['success'] = success;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckJobRespStatusEnum {
    TRUE = 'true',
    FALSE = 'false'
}
