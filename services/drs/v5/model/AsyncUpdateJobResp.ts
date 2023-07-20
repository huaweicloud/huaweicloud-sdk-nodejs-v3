

export class AsyncUpdateJobResp {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(id?: string, name?: string, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
    }
    public withId(id: string): AsyncUpdateJobResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AsyncUpdateJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AsyncUpdateJobResp {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): AsyncUpdateJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): AsyncUpdateJobResp {
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