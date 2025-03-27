

export class UploadLogRequestBody {
    private 'log_bucket'?: string;
    public constructor(logBucket?: string) { 
        this['log_bucket'] = logBucket;
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
}