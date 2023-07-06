

export class QueryNetworkResult {
    public ip?: string;
    public success: boolean;
    public result?: string;
    public status: QueryNetworkResultStatusEnum;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor(success?: any, status?: any) { 
        this['success'] = success;
        this['status'] = status;
    }
    public withIp(ip: string): QueryNetworkResult {
        this['ip'] = ip;
        return this;
    }
    public withSuccess(success: boolean): QueryNetworkResult {
        this['success'] = success;
        return this;
    }
    public withResult(result: string): QueryNetworkResult {
        this['result'] = result;
        return this;
    }
    public withStatus(status: QueryNetworkResultStatusEnum): QueryNetworkResult {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): QueryNetworkResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): QueryNetworkResult {
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
export enum QueryNetworkResultStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
