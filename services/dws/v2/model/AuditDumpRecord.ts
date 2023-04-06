

export class AuditDumpRecord {
    private 'cluster_id'?: string | undefined;
    private 'exector_time'?: string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'bucket_name'?: string | undefined;
    private 'location_prefix'?: string | undefined;
    public result?: string;
    private 'failed_reason'?: string | undefined;
    public constructor() { 
    }
    public withClusterId(clusterId: string): AuditDumpRecord {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withExectorTime(exectorTime: string): AuditDumpRecord {
        this['exector_time'] = exectorTime;
        return this;
    }
    public set exectorTime(exectorTime: string | undefined) {
        this['exector_time'] = exectorTime;
    }
    public get exectorTime() {
        return this['exector_time'];
    }
    public withBeginTime(beginTime: string): AuditDumpRecord {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): AuditDumpRecord {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withBucketName(bucketName: string): AuditDumpRecord {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withLocationPrefix(locationPrefix: string): AuditDumpRecord {
        this['location_prefix'] = locationPrefix;
        return this;
    }
    public set locationPrefix(locationPrefix: string | undefined) {
        this['location_prefix'] = locationPrefix;
    }
    public get locationPrefix() {
        return this['location_prefix'];
    }
    public withResult(result: string): AuditDumpRecord {
        this['result'] = result;
        return this;
    }
    public withFailedReason(failedReason: string): AuditDumpRecord {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason() {
        return this['failed_reason'];
    }
}