

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
    private 'is_flexus'?: boolean;
    private 'is_live_copy'?: boolean;
    private 'is_fast_flexus'?: boolean;
    private 'is_only_human_model'?: boolean;
    private 'optional_training_location'?: Array<string>;
    private 'is_background_replacement'?: boolean;
    private 'is_ondemand_resource'?: boolean;
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
    public withIsFlexus(isFlexus: boolean): TrainingJobBasicInfo {
        this['is_flexus'] = isFlexus;
        return this;
    }
    public set isFlexus(isFlexus: boolean  | undefined) {
        this['is_flexus'] = isFlexus;
    }
    public get isFlexus(): boolean | undefined {
        return this['is_flexus'];
    }
    public withIsLiveCopy(isLiveCopy: boolean): TrainingJobBasicInfo {
        this['is_live_copy'] = isLiveCopy;
        return this;
    }
    public set isLiveCopy(isLiveCopy: boolean  | undefined) {
        this['is_live_copy'] = isLiveCopy;
    }
    public get isLiveCopy(): boolean | undefined {
        return this['is_live_copy'];
    }
    public withIsFastFlexus(isFastFlexus: boolean): TrainingJobBasicInfo {
        this['is_fast_flexus'] = isFastFlexus;
        return this;
    }
    public set isFastFlexus(isFastFlexus: boolean  | undefined) {
        this['is_fast_flexus'] = isFastFlexus;
    }
    public get isFastFlexus(): boolean | undefined {
        return this['is_fast_flexus'];
    }
    public withIsOnlyHumanModel(isOnlyHumanModel: boolean): TrainingJobBasicInfo {
        this['is_only_human_model'] = isOnlyHumanModel;
        return this;
    }
    public set isOnlyHumanModel(isOnlyHumanModel: boolean  | undefined) {
        this['is_only_human_model'] = isOnlyHumanModel;
    }
    public get isOnlyHumanModel(): boolean | undefined {
        return this['is_only_human_model'];
    }
    public withOptionalTrainingLocation(optionalTrainingLocation: Array<string>): TrainingJobBasicInfo {
        this['optional_training_location'] = optionalTrainingLocation;
        return this;
    }
    public set optionalTrainingLocation(optionalTrainingLocation: Array<string>  | undefined) {
        this['optional_training_location'] = optionalTrainingLocation;
    }
    public get optionalTrainingLocation(): Array<string> | undefined {
        return this['optional_training_location'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): TrainingJobBasicInfo {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withIsOndemandResource(isOndemandResource: boolean): TrainingJobBasicInfo {
        this['is_ondemand_resource'] = isOndemandResource;
        return this;
    }
    public set isOndemandResource(isOndemandResource: boolean  | undefined) {
        this['is_ondemand_resource'] = isOndemandResource;
    }
    public get isOndemandResource(): boolean | undefined {
        return this['is_ondemand_resource'];
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
    WAIT_TRAINING_DATA_PREPROCESS = 'WAIT_TRAINING_DATA_PREPROCESS',
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
    MANUAL_STOP_INFERENCE_DATA_PREPROCESS = 'MANUAL_STOP_INFERENCE_DATA_PREPROCESS',
    MANUAL_STOP_TRAIN = 'MANUAL_STOP_TRAIN',
    MANUAL_STOP_TRAINING_DATA_PREPROCESS = 'MANUAL_STOP_TRAINING_DATA_PREPROCESS',
    MANUAL_STOP_BEAUTY_PREPROCESS = 'MANUAL_STOP_BEAUTY_PREPROCESS',
    WAIT_USER_CONFIRM = 'WAIT_USER_CONFIRM',
    JOB_REJECT = 'JOB_REJECT',
    JOB_PENDING = 'JOB_PENDING',
    WAIT_ASSET_SYNC = 'WAIT_ASSET_SYNC',
    WAIT_ADMIN_CONFIRM = 'WAIT_ADMIN_CONFIRM',
    JOB_FINISH = 'JOB_FINISH',
    COMPILING = 'COMPILING',
    WAIT_COMPILE = 'WAIT_COMPILE',
    COMPILE_FAILED = 'COMPILE_FAILED',
    WAIT_BEAUTY = 'WAIT_BEAUTY',
    WAIT_GENERATE_ACTION = 'WAIT_GENERATE_ACTION',
    WAIT_ARRANGE = 'WAIT_ARRANGE',
    ACTION_GENERATE_DATA_PROCESSING = 'ACTION_GENERATE_DATA_PROCESSING',
    MANUAL_STOP_ACTION_GENERATE_DATA_PROCESSING = 'MANUAL_STOP_ACTION_GENERATE_DATA_PROCESSING',
    MANUAL_STOP_ACTION_GENERATE_ORI_PROCESSING = 'MANUAL_STOP_ACTION_GENERATE_ORI_PROCESSING',
    ACTION_GENERATE_ORI_PROCESSING = 'ACTION_GENERATE_ORI_PROCESSING',
    ACTION_GENERATE_DATA_FAILED = 'ACTION_GENERATE_DATA_FAILED',
    ACTION_GENERATE_ORI_FAILED = 'ACTION_GENERATE_ORI_FAILED',
    ACTION_GENERATE_ORI_SUCCESS = 'ACTION_GENERATE_ORI_SUCCESS',
    GENERATE_ACTION_PREPROCESS_FAILED = 'GENERATE_ACTION_PREPROCESS_FAILED',
    WAIT_ADMIN_CALIBRATION = 'WAIT_ADMIN_CALIBRATION',
    BEAUTY_VIDEO_FILE_UPLOADED = 'BEAUTY_VIDEO_FILE_UPLOADED',
    BEAUTYFACE_SUCCESS = 'BEAUTYFACE_SUCCESS',
    BEAUTYFACE_FAILED = 'BEAUTYFACE_FAILED',
    WAIT_BEAUTY_VIDEO_FILE_UPLOAD = 'WAIT_BEAUTY_VIDEO_FILE_UPLOAD',
    BEAUTYFACE_ROCESSING = 'BEAUTYFACE_ROCESSING',
    WAIT_TEST_VIDEO_CHECK = 'WAIT_TEST_VIDEO_CHECK',
    TEST_VIDEO_CHECK_PROCESSING = 'TEST_VIDEO_CHECK_PROCESSING',
    TEST_VIDEO_CHECK_SUCCESS = 'TEST_VIDEO_CHECK_SUCCESS',
    TEST_VIDEO_CHECK_FAILED = 'TEST_VIDEO_CHECK_FAILED',
    VIDEO_ANALYZE_PROCESSING = 'VIDEO_ANALYZE_PROCESSING',
    VIDEO_ANALYZE_SUCCESS = 'VIDEO_ANALYZE_SUCCESS',
    VIDEO_ANALYZE_FAILED = 'VIDEO_ANALYZE_FAILED',
    ACTION_MARKING = 'ACTION_MARKING',
    ACTION_MARK_SUCCESS = 'ACTION_MARK_SUCCESS',
    ACTION_MARK_FAILED = 'ACTION_MARK_FAILED',
    ACTION_MARK_UPLOADED = 'ACTION_MARK_UPLOADED',
    WAIT_GENERATE_ACTION_MARK = 'WAIT_GENERATE_ACTION_MARK',
    MANUL_STOP_ACTION_MARK = 'MANUL_STOP_ACTION_MARK'
}
/**
    * @export
    * @enum {string}
    */
export enum TrainingJobBasicInfoModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3.2',
    V3_3 = 'V3.3'
}
/**
    * @export
    * @enum {string}
    */
export enum TrainingJobBasicInfoMattingTypeEnum {
    AI = 'AI',
    MANUAL = 'MANUAL'
}
