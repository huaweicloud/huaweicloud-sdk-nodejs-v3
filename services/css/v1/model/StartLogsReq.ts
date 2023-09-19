

export class StartLogsReq {
    public agency?: string;
    public logBasePath?: string;
    public logBucket?: string;
    public constructor(agency?: string, logBasePath?: string, logBucket?: string) { 
        this['agency'] = agency;
        this['logBasePath'] = logBasePath;
        this['logBucket'] = logBucket;
    }
    public withAgency(agency: string): StartLogsReq {
        this['agency'] = agency;
        return this;
    }
    public withLogBasePath(logBasePath: string): StartLogsReq {
        this['logBasePath'] = logBasePath;
        return this;
    }
    public withLogBucket(logBucket: string): StartLogsReq {
        this['logBucket'] = logBucket;
        return this;
    }
}