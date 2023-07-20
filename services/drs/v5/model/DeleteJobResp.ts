import { ErrorResp } from './ErrorResp';


export class DeleteJobResp {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    public constructor(errorCode?: string, errorMsg?: string, id?: string, name?: string, status?: string) { 
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
    }
    public withErrorCode(errorCode: string): DeleteJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DeleteJobResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withId(id: string): DeleteJobResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): DeleteJobResp {
        this['status'] = status;
        return this;
    }
}