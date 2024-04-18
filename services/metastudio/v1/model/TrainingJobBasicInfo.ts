

export class TrainingJobBasicInfo {
    private 'job_id'?: string;
    public name?: string;
    public state?: TrainingJobBasicInfoStateEnum | string;
    private 'asset_id'?: string;
    private 'project_id'?: string;
    private 'cover_download_url'?: string;
    private 'last_update_time'?: string;
    private 'create_time'?: string;
    public contact?: string;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    private 'model_version'?: TrainingJobBasicInfoModelVersionEnum | string;
    private 'matting_type'?: TrainingJobBasicInfoMattingTypeEnum | string;
    private 'model_resolution'?: string;
    private 'app_user_id'?: string;
    public constructor(jobId?: string, name?: string, state?: string) { 
        this['job_id'] = jobId;
        this['name'] = name;
        this['state'] = state;
    }
    public withJobId(jobId: string): TrainingJobBasicInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): TrainingJobBasicInfo {
        this['name'] = name;
        return this;
    }
    public withState(state: TrainingJobBasicInfoStateEnum | string): TrainingJobBasicInfo {
        this['state'] = state;
        return this;
    }
    public withAssetId(assetId: string): TrainingJobBasicInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withProjectId(projectId: string): TrainingJobBasicInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCoverDownloadUrl(coverDownloadUrl: string): TrainingJobBasicInfo {
        this['cover_download_url'] = coverDownloadUrl;
        return this;
    }
    public set coverDownloadUrl(coverDownloadUrl: string  | undefined) {
        this['cover_download_url'] = coverDownloadUrl;
    }
    public get coverDownloadUrl(): string | undefined {
        return this['cover_download_url'];
    }
    public withLastUpdateTime(lastUpdateTime: string): TrainingJobBasicInfo {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withCreateTime(createTime: string): TrainingJobBasicInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withContact(contact: string): TrainingJobBasicInfo {
        this['contact'] = contact;
        return this;
    }
    public withBatchName(batchName: string): TrainingJobBasicInfo {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): TrainingJobBasicInfo {
        this['tags'] = tags;
        return this;
    }
    public withModelVersion(modelVersion: TrainingJobBasicInfoModelVersionEnum | string): TrainingJobBasicInfo {
        this['model_version'] = modelVersion;
        return this;
    }
    public set modelVersion(modelVersion: TrainingJobBasicInfoModelVersionEnum | string  | undefined) {
        this['model_version'] = modelVersion;
    }
    public get modelVersion(): TrainingJobBasicInfoModelVersionEnum | string | undefined {
        return this['model_version'];
    }
    public withMattingType(mattingType: TrainingJobBasicInfoMattingTypeEnum | string): TrainingJobBasicInfo {
        this['matting_type'] = mattingType;
        return this;
    }
    public set mattingType(mattingType: TrainingJobBasicInfoMattingTypeEnum | string  | undefined) {
        this['matting_type'] = mattingType;
    }
    public get mattingType(): TrainingJobBasicInfoMattingTypeEnum | string | undefined {
        return this['matting_type'];
    }
    public withModelResolution(modelResolution: string): TrainingJobBasicInfo {
        this['model_resolution'] = modelResolution;
        return this;
    }
    public set modelResolution(modelResolution: string  | undefined) {
        this['model_resolution'] = modelResolution;
    }
    public get modelResolution(): string | undefined {
        return this['model_resolution'];
    }
    public withAppUserId(appUserId: string): TrainingJobBasicInfo {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TrainingJobBasicInfoStateEnum {
    WAIT_FILE_UPLOAD = 'WAIT_FILE_UPLOAD',
    AUTO_VERIFYING = 'AUTO_VERIFYING',
    AUTO_VERIFY_FAILED = 'AUTO_VERIFY_FAILED',
    MANUAL_VERIFYING = 'MANUAL_VERIFYING',
    MANUAL_VERIFY_FAILED = 'MANUAL_VERIFY_FAILED',
    MANUAL_VERIFY_SUCCESS = 'MANUAL_VERIFY_SUCCESS',
    TRAINING_DATA_PREPROCESSING = 'TRAINING_DATA_PREPROCESSING',
    TRAINING_DATA_PREPROCESS_FAILED = 'TRAINING_DATA_PREPROCESS_FAILED',
    TRAINING_DATA_PREPROCESS_SUCCESS = 'TRAINING_DATA_PREPROCESS_SUCCESS',
    TRAINING = 'TRAINING',
    TRAIN_FAILED = 'TRAIN_FAILED',
    TRAIN_SUCCESS = 'TRAIN_SUCCESS',
    INFERENCE_DATA_PREPROCESSING = 'INFERENCE_DATA_PREPROCESSING',
    INFERENCE_DATA_PREPROCESS_FAILED = 'INFERENCE_DATA_PREPROCESS_FAILED',
    WAIT_MASK_UPLOAD = 'WAIT_MASK_UPLOAD',
    WAIT_MAIN_FILE_UPLOAD = 'WAIT_MAIN_FILE_UPLOAD',
    JOB_SUCCESS = 'JOB_SUCCESS',
    WAIT_USER_CONFIRM = 'WAIT_USER_CONFIRM',
    JOB_REJECT = 'JOB_REJECT',
    JOB_PENDING = 'JOB_PENDING',
    JOB_FINISH = 'JOB_FINISH'
}
/**
    * @export
    * @enum {string}
    */
export enum TrainingJobBasicInfoModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3.2'
}
/**
    * @export
    * @enum {string}
    */
export enum TrainingJobBasicInfoMattingTypeEnum {
    AI = 'AI',
    MANUAL = 'MANUAL'
}
