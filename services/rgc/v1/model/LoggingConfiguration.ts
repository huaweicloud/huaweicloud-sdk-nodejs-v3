import { AccessLoggingBucketBaseline } from './AccessLoggingBucketBaseline';
import { LoggingBucketBaseline } from './LoggingBucketBaseline';


export class LoggingConfiguration {
    private 'logging_bucket_name'?: string;
    private 'access_logging_bucket'?: AccessLoggingBucketBaseline;
    private 'logging_bucket'?: LoggingBucketBaseline;
    public constructor() { 
    }
    public withLoggingBucketName(loggingBucketName: string): LoggingConfiguration {
        this['logging_bucket_name'] = loggingBucketName;
        return this;
    }
    public set loggingBucketName(loggingBucketName: string  | undefined) {
        this['logging_bucket_name'] = loggingBucketName;
    }
    public get loggingBucketName(): string | undefined {
        return this['logging_bucket_name'];
    }
    public withAccessLoggingBucket(accessLoggingBucket: AccessLoggingBucketBaseline): LoggingConfiguration {
        this['access_logging_bucket'] = accessLoggingBucket;
        return this;
    }
    public set accessLoggingBucket(accessLoggingBucket: AccessLoggingBucketBaseline  | undefined) {
        this['access_logging_bucket'] = accessLoggingBucket;
    }
    public get accessLoggingBucket(): AccessLoggingBucketBaseline | undefined {
        return this['access_logging_bucket'];
    }
    public withLoggingBucket(loggingBucket: LoggingBucketBaseline): LoggingConfiguration {
        this['logging_bucket'] = loggingBucket;
        return this;
    }
    public set loggingBucket(loggingBucket: LoggingBucketBaseline  | undefined) {
        this['logging_bucket'] = loggingBucket;
    }
    public get loggingBucket(): LoggingBucketBaseline | undefined {
        return this['logging_bucket'];
    }
}