

export class DeleteChLtsConfigRequestBodyLogConfigs {
    private 'instance_id'?: string;
    private 'log_type'?: string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): DeleteChLtsConfigRequestBodyLogConfigs {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: string): DeleteChLtsConfigRequestBodyLogConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
}