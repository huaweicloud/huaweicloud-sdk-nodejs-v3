

export class AssetOperationRecordRsp {
    private 'record_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'job_type'?: AssetOperationRecordRspJobTypeEnum | string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'job_status'?: AssetOperationRecordRspJobStatusEnum | string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'asset_id'?: string;
    public service?: string;
    private 'asset_code'?: string;
    private 'asset_name'?: string;
    private 'asset_version'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'is_deleted'?: boolean;
    public details?: string;
    private 'record_extend_message'?: string;
    public constructor(jobType?: string, jobId?: string, jobName?: string, jobStatus?: string, userId?: string, userName?: string, assetId?: string, service?: string) { 
        this['job_type'] = jobType;
        this['job_id'] = jobId;
        this['job_name'] = jobName;
        this['job_status'] = jobStatus;
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['asset_id'] = assetId;
        this['service'] = service;
    }
    public withRecordId(recordId: string): AssetOperationRecordRsp {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withProjectId(projectId: string): AssetOperationRecordRsp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): AssetOperationRecordRsp {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withJobType(jobType: AssetOperationRecordRspJobTypeEnum | string): AssetOperationRecordRsp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: AssetOperationRecordRspJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): AssetOperationRecordRspJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): AssetOperationRecordRsp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): AssetOperationRecordRsp {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobStatus(jobStatus: AssetOperationRecordRspJobStatusEnum | string): AssetOperationRecordRsp {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: AssetOperationRecordRspJobStatusEnum | string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): AssetOperationRecordRspJobStatusEnum | string | undefined {
        return this['job_status'];
    }
    public withUserId(userId: string): AssetOperationRecordRsp {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): AssetOperationRecordRsp {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAssetId(assetId: string): AssetOperationRecordRsp {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withService(service: string): AssetOperationRecordRsp {
        this['service'] = service;
        return this;
    }
    public withAssetCode(assetCode: string): AssetOperationRecordRsp {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetName(assetName: string): AssetOperationRecordRsp {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetVersion(assetVersion: string): AssetOperationRecordRsp {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withCreatedAt(createdAt: Date): AssetOperationRecordRsp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AssetOperationRecordRsp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withIsDeleted(isDeleted: boolean): AssetOperationRecordRsp {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withDetails(details: string): AssetOperationRecordRsp {
        this['details'] = details;
        return this;
    }
    public withRecordExtendMessage(recordExtendMessage: string): AssetOperationRecordRsp {
        this['record_extend_message'] = recordExtendMessage;
        return this;
    }
    public set recordExtendMessage(recordExtendMessage: string  | undefined) {
        this['record_extend_message'] = recordExtendMessage;
    }
    public get recordExtendMessage(): string | undefined {
        return this['record_extend_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssetOperationRecordRspJobTypeEnum {
    PRETRAIN = 'PRETRAIN',
    SFT = 'SFT',
    RFT = 'RFT',
    RLHF = 'RLHF',
    QUANTIZATION = 'QUANTIZATION',
    MANUAL_EVALUATION = 'MANUAL-EVALUATION',
    AUTO_EVALUATION = 'AUTO-EVALUATION',
    ONLINE_DEPLOY = 'ONLINE-DEPLOY',
    EDGE_DEPLOY = 'EDGE-DEPLOY',
    LORA = 'LORA',
    QLORA = 'QLORA',
    DATA_CLEANING = 'DATA-CLEANING',
    DATA_IMPORT = 'DATA-IMPORT',
    DATA_ANNOTATION = 'DATA-ANNOTATION'
}
/**
    * @export
    * @enum {string}
    */
export enum AssetOperationRecordRspJobStatusEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED',
    FAILED = 'FAILED',
    SUCCEED = 'SUCCEED',
    DELETED = 'DELETED'
}
