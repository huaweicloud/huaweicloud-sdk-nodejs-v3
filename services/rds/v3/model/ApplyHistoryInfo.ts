

export class ApplyHistoryInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'apply_result'?: string;
    private 'apply_time'?: string;
    private 'error_code'?: string;
    public constructor(instanceId?: string, instanceName?: string, applyResult?: string, applyTime?: string, errorCode?: string) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['apply_result'] = applyResult;
        this['apply_time'] = applyTime;
        this['error_code'] = errorCode;
    }
    public withInstanceId(instanceId: string): ApplyHistoryInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApplyHistoryInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withApplyResult(applyResult: string): ApplyHistoryInfo {
        this['apply_result'] = applyResult;
        return this;
    }
    public set applyResult(applyResult: string  | undefined) {
        this['apply_result'] = applyResult;
    }
    public get applyResult(): string | undefined {
        return this['apply_result'];
    }
    public withApplyTime(applyTime: string): ApplyHistoryInfo {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): string | undefined {
        return this['apply_time'];
    }
    public withErrorCode(errorCode: string): ApplyHistoryInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}