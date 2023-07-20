

export class PostPreCheckResp {
    public id?: string;
    private 'precheck_id'?: string;
    public status?: PostPreCheckRespStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): PostPreCheckResp {
        this['id'] = id;
        return this;
    }
    public withPrecheckId(precheckId: string): PostPreCheckResp {
        this['precheck_id'] = precheckId;
        return this;
    }
    public set precheckId(precheckId: string  | undefined) {
        this['precheck_id'] = precheckId;
    }
    public get precheckId(): string | undefined {
        return this['precheck_id'];
    }
    public withStatus(status: PostPreCheckRespStatusEnum | string): PostPreCheckResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): PostPreCheckResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): PostPreCheckResp {
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
export enum PostPreCheckRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
