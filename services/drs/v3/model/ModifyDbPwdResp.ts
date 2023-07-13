

export class ModifyDbPwdResp {
    public id?: string;
    public status?: string;
    private 'end_point_type'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ModifyDbPwdResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ModifyDbPwdResp {
        this['status'] = status;
        return this;
    }
    public withEndPointType(endPointType: string): ModifyDbPwdResp {
        this['end_point_type'] = endPointType;
        return this;
    }
    public set endPointType(endPointType: string | undefined) {
        this['end_point_type'] = endPointType;
    }
    public get endPointType() {
        return this['end_point_type'];
    }
    public withErrorCode(errorCode: string): ModifyDbPwdResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ModifyDbPwdResp {
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