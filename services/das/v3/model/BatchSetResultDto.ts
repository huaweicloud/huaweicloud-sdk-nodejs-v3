

export class BatchSetResultDto {
    private 'instance_id'?: string;
    public success?: boolean;
    private 'error_msg'?: string;
    public constructor(instanceId?: string, success?: boolean) { 
        this['instance_id'] = instanceId;
        this['success'] = success;
    }
    public withInstanceId(instanceId: string): BatchSetResultDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSuccess(success: boolean): BatchSetResultDto {
        this['success'] = success;
        return this;
    }
    public withErrorMsg(errorMsg: string): BatchSetResultDto {
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