

export class ListAssetOperationRecordsRequest {
    private 'workspace_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    private 'record_id'?: string;
    private 'job_type'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'job_status'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'asset_id'?: string;
    private 'asset_code'?: string;
    private 'is_deleted'?: boolean;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ListAssetOperationRecordsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: number): ListAssetOperationRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAssetOperationRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortDir(sortDir: string): ListAssetOperationRecordsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListAssetOperationRecordsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withRecordId(recordId: string): ListAssetOperationRecordsRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withJobType(jobType: string): ListAssetOperationRecordsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): ListAssetOperationRecordsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ListAssetOperationRecordsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobStatus(jobStatus: string): ListAssetOperationRecordsRequest {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): string | undefined {
        return this['job_status'];
    }
    public withUserId(userId: string): ListAssetOperationRecordsRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ListAssetOperationRecordsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAssetId(assetId: string): ListAssetOperationRecordsRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetCode(assetCode: string): ListAssetOperationRecordsRequest {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withIsDeleted(isDeleted: boolean): ListAssetOperationRecordsRequest {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
}