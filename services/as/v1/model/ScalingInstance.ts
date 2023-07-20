

export class ScalingInstance {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'failed_reason'?: string;
    private 'failed_details'?: string;
    private 'instance_config'?: string;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): ScalingInstance {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): ScalingInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withFailedReason(failedReason: string): ScalingInstance {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedDetails(failedDetails: string): ScalingInstance {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: string  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): string | undefined {
        return this['failed_details'];
    }
    public withInstanceConfig(instanceConfig: string): ScalingInstance {
        this['instance_config'] = instanceConfig;
        return this;
    }
    public set instanceConfig(instanceConfig: string  | undefined) {
        this['instance_config'] = instanceConfig;
    }
    public get instanceConfig(): string | undefined {
        return this['instance_config'];
    }
}