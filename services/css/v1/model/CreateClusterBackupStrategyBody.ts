

export class CreateClusterBackupStrategyBody {
    public period?: string;
    public prefix?: string;
    public keepday?: number;
    public bucket?: string;
    public basePath?: string;
    public agency?: string;
    public constructor(period?: string, prefix?: string, keepday?: number) { 
        this['period'] = period;
        this['prefix'] = prefix;
        this['keepday'] = keepday;
    }
    public withPeriod(period: string): CreateClusterBackupStrategyBody {
        this['period'] = period;
        return this;
    }
    public withPrefix(prefix: string): CreateClusterBackupStrategyBody {
        this['prefix'] = prefix;
        return this;
    }
    public withKeepday(keepday: number): CreateClusterBackupStrategyBody {
        this['keepday'] = keepday;
        return this;
    }
    public withBucket(bucket: string): CreateClusterBackupStrategyBody {
        this['bucket'] = bucket;
        return this;
    }
    public withBasePath(basePath: string): CreateClusterBackupStrategyBody {
        this['basePath'] = basePath;
        return this;
    }
    public withAgency(agency: string): CreateClusterBackupStrategyBody {
        this['agency'] = agency;
        return this;
    }
}