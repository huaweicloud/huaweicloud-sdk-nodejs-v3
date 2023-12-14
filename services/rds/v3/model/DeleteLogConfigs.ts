

export class DeleteLogConfigs {
    private 'instance_id'?: string;
    private 'log_type'?: DeleteLogConfigsLogTypeEnum | string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): DeleteLogConfigs {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: DeleteLogConfigsLogTypeEnum | string): DeleteLogConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: DeleteLogConfigsLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): DeleteLogConfigsLogTypeEnum | string | undefined {
        return this['log_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteLogConfigsLogTypeEnum {
    ERROR_LOG = 'error_log',
    SLOW_LOG = 'slow_log',
    AUDIT_LOG = 'audit_log'
}
