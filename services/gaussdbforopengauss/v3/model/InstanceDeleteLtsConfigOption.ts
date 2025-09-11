

export class InstanceDeleteLtsConfigOption {
    private 'instance_id'?: string;
    private 'log_type'?: InstanceDeleteLtsConfigOptionLogTypeEnum | string;
    public constructor(instanceId?: string, logType?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
    }
    public withInstanceId(instanceId: string): InstanceDeleteLtsConfigOption {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: InstanceDeleteLtsConfigOptionLogTypeEnum | string): InstanceDeleteLtsConfigOption {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: InstanceDeleteLtsConfigOptionLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): InstanceDeleteLtsConfigOptionLogTypeEnum | string | undefined {
        return this['log_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceDeleteLtsConfigOptionLogTypeEnum {
    AUDIT_LOG = 'audit_log'
}
