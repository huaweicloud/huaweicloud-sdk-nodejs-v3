

export class GetLogBackupReq {
    public instanceName?: string;
    public level?: string;
    public logType?: string;
    public constructor(instanceName?: string, level?: string, logType?: string) { 
        this['instanceName'] = instanceName;
        this['level'] = level;
        this['logType'] = logType;
    }
    public withInstanceName(instanceName: string): GetLogBackupReq {
        this['instanceName'] = instanceName;
        return this;
    }
    public withLevel(level: string): GetLogBackupReq {
        this['level'] = level;
        return this;
    }
    public withLogType(logType: string): GetLogBackupReq {
        this['logType'] = logType;
        return this;
    }
}