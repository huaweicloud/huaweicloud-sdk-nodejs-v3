

export class AppliedHistoriesResult {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'apply_result'?: string;
    private 'applied_at'?: string;
    private 'error_code'?: string;
    public constructor(instanceId?: string, instanceName?: string, applyResult?: string, appliedAt?: string, errorCode?: string) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['apply_result'] = applyResult;
        this['applied_at'] = appliedAt;
        this['error_code'] = errorCode;
    }
    public withInstanceId(instanceId: string): AppliedHistoriesResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AppliedHistoriesResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withApplyResult(applyResult: string): AppliedHistoriesResult {
        this['apply_result'] = applyResult;
        return this;
    }
    public set applyResult(applyResult: string  | undefined) {
        this['apply_result'] = applyResult;
    }
    public get applyResult(): string | undefined {
        return this['apply_result'];
    }
    public withAppliedAt(appliedAt: string): AppliedHistoriesResult {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: string  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): string | undefined {
        return this['applied_at'];
    }
    public withErrorCode(errorCode: string): AppliedHistoriesResult {
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