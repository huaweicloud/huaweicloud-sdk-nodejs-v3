

export class GetLogBackupReq {
    private 'instance_name'?: string;
    public level?: string;
    private 'log_type'?: string;
    public constructor(instanceName?: string, level?: string, logType?: string) { 
        this['instance_name'] = instanceName;
        this['level'] = level;
        this['log_type'] = logType;
    }
    public withInstanceName(instanceName: string): GetLogBackupReq {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLevel(level: string): GetLogBackupReq {
        this['level'] = level;
        return this;
    }
    public withLogType(logType: string): GetLogBackupReq {
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