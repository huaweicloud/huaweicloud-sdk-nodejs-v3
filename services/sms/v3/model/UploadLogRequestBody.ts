

export class UploadLogRequestBody {
    private 'log_bucket'?: string;
    private 'log_expire'?: number;
    public constructor(logBucket?: string, logExpire?: number) { 
        this['log_bucket'] = logBucket;
        this['log_expire'] = logExpire;
    }
    public withLogBucket(logBucket: string): UploadLogRequestBody {
        this['log_bucket'] = logBucket;
        return this;
    }
    public set logBucket(logBucket: string  | undefined) {
        this['log_bucket'] = logBucket;
    }
    public get logBucket(): string | undefined {
        return this['log_bucket'];
    }
    public withLogExpire(logExpire: number): UploadLogRequestBody {
        this['log_expire'] = logExpire;
        return this;
    }
    public set logExpire(logExpire: number  | undefined) {
        this['log_expire'] = logExpire;
    }
    public get logExpire(): number | undefined {
        return this['log_expire'];
    }
}