

export class ApplyConfigurationResponseApplyResults {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'restart_required'?: boolean;
    public success?: boolean;
    public constructor(instanceId?: string, instanceName?: string, restartRequired?: boolean, success?: boolean) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['restart_required'] = restartRequired;
        this['success'] = success;
    }
    public withInstanceId(instanceId: string): ApplyConfigurationResponseApplyResults {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApplyConfigurationResponseApplyResults {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withRestartRequired(restartRequired: boolean): ApplyConfigurationResponseApplyResults {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withSuccess(success: boolean): ApplyConfigurationResponseApplyResults {
        this['success'] = success;
        return this;
    }
}