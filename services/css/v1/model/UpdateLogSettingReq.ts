

export class UpdateLogSettingReq {
    public agency?: string;
    public logBasePath?: string;
    public logBucket?: string;
    public constructor(agency?: string, logBasePath?: string, logBucket?: string) { 
        this['agency'] = agency;
        this['logBasePath'] = logBasePath;
        this['logBucket'] = logBucket;
    }
    public withAgency(agency: string): UpdateLogSettingReq {
        this['agency'] = agency;
        return this;
    }
    public withLogBasePath(logBasePath: string): UpdateLogSettingReq {
        this['logBasePath'] = logBasePath;
        return this;
    }
    public withLogBucket(logBucket: string): UpdateLogSettingReq {
        this['logBucket'] = logBucket;
        return this;
    }
}