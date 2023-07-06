

export class PostPreCheckResp {
    public id?: string;
    private 'precheck_id'?: string | undefined;
    public status?: PostPreCheckRespStatusEnum;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
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
    public set precheckId(precheckId: string | undefined) {
        this['precheck_id'] = precheckId;
    }
    public get precheckId() {
        return this['precheck_id'];
    }
    public withStatus(status: PostPreCheckRespStatusEnum): PostPreCheckResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): PostPreCheckResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): PostPreCheckResp {
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

/**
    * @export
    * @enum {string}
    */
export enum PostPreCheckRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
