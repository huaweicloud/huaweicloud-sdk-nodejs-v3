

export class CheckRdsConnectionResqVO {
    private 'rds_instance_id'?: string;
    public success?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withRdsInstanceId(rdsInstanceId: string): CheckRdsConnectionResqVO {
        this['rds_instance_id'] = rdsInstanceId;
        return this;
    }
    public set rdsInstanceId(rdsInstanceId: string  | undefined) {
        this['rds_instance_id'] = rdsInstanceId;
    }
    public get rdsInstanceId(): string | undefined {
        return this['rds_instance_id'];
    }
    public withSuccess(success: string): CheckRdsConnectionResqVO {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): CheckRdsConnectionResqVO {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): CheckRdsConnectionResqVO {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}