import { CheckBucketResponse } from './CheckBucketResponse';


export class Bucket {
    private 'bucket_name'?: string;
    private 'bucket_location'?: string;
    private 'kms_id'?: string;
    private 'is_support_trace_files_encryption'?: boolean;
    private 'check_bucket_response'?: CheckBucketResponse;
    public constructor(bucketName?: string, isSupportTraceFilesEncryption?: boolean) { 
        this['bucket_name'] = bucketName;
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public withBucketName(bucketName: string): Bucket {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketLocation(bucketLocation: string): Bucket {
        this['bucket_location'] = bucketLocation;
        return this;
    }
    public set bucketLocation(bucketLocation: string  | undefined) {
        this['bucket_location'] = bucketLocation;
    }
    public get bucketLocation(): string | undefined {
        return this['bucket_location'];
    }
    public withKmsId(kmsId: string): Bucket {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
    public withIsSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean): Bucket {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
        return this;
    }
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean  | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption(): boolean | undefined {
        return this['is_support_trace_files_encryption'];
    }
    public withCheckBucketResponse(checkBucketResponse: CheckBucketResponse): Bucket {
        this['check_bucket_response'] = checkBucketResponse;
        return this;
    }
    public set checkBucketResponse(checkBucketResponse: CheckBucketResponse  | undefined) {
        this['check_bucket_response'] = checkBucketResponse;
    }
    public get checkBucketResponse(): CheckBucketResponse | undefined {
        return this['check_bucket_response'];
    }
}