

export class DataTransformationResp {
    public id?: string;
    public status?: DataTransformationRespStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): DataTransformationResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: DataTransformationRespStatusEnum | string): DataTransformationResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): DataTransformationResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DataTransformationResp {
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
export enum DataTransformationRespStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
