import { CommentLogInfo } from './CommentLogInfo';
import { InferenceActionMarkInfo } from './InferenceActionMarkInfo';
import { InferenceVideoMarkInfo } from './InferenceVideoMarkInfo';
import { OperationLogInfo } from './OperationLogInfo';
import { TrainingJobBasicInfo } from './TrainingJobBasicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class Show2dModelTrainingJobResponse extends SdkResponse {
    private 'job_id'?: string;
    public name?: string;
    public state?: Show2dModelTrainingJobResponseStateEnum | string;
    private 'asset_id'?: string;
    private 'project_id'?: string;
    private 'cover_download_url'?: string;
    private 'last_update_time'?: string;
    private 'create_time'?: string;
    public contact?: string;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    private 'model_version'?: Show2dModelTrainingJobResponseModelVersionEnum | string;
    private 'matting_type'?: Show2dModelTrainingJobResponseMattingTypeEnum | string;
    private 'training_video_download_url'?: string;
    private 'id_card_image1_download_url'?: string;
    private 'id_card_image2_download_url'?: string;
    private 'grant_file_download_url'?: string;
    private 'operation_logs'?: Array<OperationLogInfo>;
    private 'comment_logs'?: Array<CommentLogInfo>;
    private 'is_mask_file_uploaded'?: boolean;
    private 'mask_file_download_url'?: string;
    private 'verify_video_download_url'?: string;
    private 'markable_video_download_url'?: string;
    private 'inference_data_process_video_mark_info'?: InferenceVideoMarkInfo;
    private 'inference_data_process_action_mark_info'?: InferenceActionMarkInfo;
    private 'is_background_replacement'?: boolean;
    private 'model_resolution'?: string;
    private 'X-Request-Id'?: string;
    public constructor(jobId?: string, name?: string, state?: string) { 
        super();
        this['job_id'] = jobId;
        this['name'] = name;
        this['state'] = state;
    }
    public withJobId(jobId: string): Show2dModelTrainingJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): Show2dModelTrainingJobResponse {
        this['name'] = name;
        return this;
    }
    public withState(state: Show2dModelTrainingJobResponseStateEnum | string): Show2dModelTrainingJobResponse {
        this['state'] = state;
        return this;
    }
    public withAssetId(assetId: string): Show2dModelTrainingJobResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withProjectId(projectId: string): Show2dModelTrainingJobResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCoverDownloadUrl(coverDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['cover_download_url'] = coverDownloadUrl;
        return this;
    }
    public set coverDownloadUrl(coverDownloadUrl: string  | undefined) {
        this['cover_download_url'] = coverDownloadUrl;
    }
    public get coverDownloadUrl(): string | undefined {
        return this['cover_download_url'];
    }
    public withLastUpdateTime(lastUpdateTime: string): Show2dModelTrainingJobResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withCreateTime(createTime: string): Show2dModelTrainingJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withContact(contact: string): Show2dModelTrainingJobResponse {
        this['contact'] = contact;
        return this;
    }
    public withBatchName(batchName: string): Show2dModelTrainingJobResponse {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): Show2dModelTrainingJobResponse {
        this['tags'] = tags;
        return this;
    }
    public withModelVersion(modelVersion: Show2dModelTrainingJobResponseModelVersionEnum | string): Show2dModelTrainingJobResponse {
        this['model_version'] = modelVersion;
        return this;
    }
    public set modelVersion(modelVersion: Show2dModelTrainingJobResponseModelVersionEnum | string  | undefined) {
        this['model_version'] = modelVersion;
    }
    public get modelVersion(): Show2dModelTrainingJobResponseModelVersionEnum | string | undefined {
        return this['model_version'];
    }
    public withMattingType(mattingType: Show2dModelTrainingJobResponseMattingTypeEnum | string): Show2dModelTrainingJobResponse {
        this['matting_type'] = mattingType;
        return this;
    }
    public set mattingType(mattingType: Show2dModelTrainingJobResponseMattingTypeEnum | string  | undefined) {
        this['matting_type'] = mattingType;
    }
    public get mattingType(): Show2dModelTrainingJobResponseMattingTypeEnum | string | undefined {
        return this['matting_type'];
    }
    public withTrainingVideoDownloadUrl(trainingVideoDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['training_video_download_url'] = trainingVideoDownloadUrl;
        return this;
    }
    public set trainingVideoDownloadUrl(trainingVideoDownloadUrl: string  | undefined) {
        this['training_video_download_url'] = trainingVideoDownloadUrl;
    }
    public get trainingVideoDownloadUrl(): string | undefined {
        return this['training_video_download_url'];
    }
    public withIdCardImage1DownloadUrl(idCardImage1DownloadUrl: string): Show2dModelTrainingJobResponse {
        this['id_card_image1_download_url'] = idCardImage1DownloadUrl;
        return this;
    }
    public set idCardImage1DownloadUrl(idCardImage1DownloadUrl: string  | undefined) {
        this['id_card_image1_download_url'] = idCardImage1DownloadUrl;
    }
    public get idCardImage1DownloadUrl(): string | undefined {
        return this['id_card_image1_download_url'];
    }
    public withIdCardImage2DownloadUrl(idCardImage2DownloadUrl: string): Show2dModelTrainingJobResponse {
        this['id_card_image2_download_url'] = idCardImage2DownloadUrl;
        return this;
    }
    public set idCardImage2DownloadUrl(idCardImage2DownloadUrl: string  | undefined) {
        this['id_card_image2_download_url'] = idCardImage2DownloadUrl;
    }
    public get idCardImage2DownloadUrl(): string | undefined {
        return this['id_card_image2_download_url'];
    }
    public withGrantFileDownloadUrl(grantFileDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['grant_file_download_url'] = grantFileDownloadUrl;
        return this;
    }
    public set grantFileDownloadUrl(grantFileDownloadUrl: string  | undefined) {
        this['grant_file_download_url'] = grantFileDownloadUrl;
    }
    public get grantFileDownloadUrl(): string | undefined {
        return this['grant_file_download_url'];
    }
    public withOperationLogs(operationLogs: Array<OperationLogInfo>): Show2dModelTrainingJobResponse {
        this['operation_logs'] = operationLogs;
        return this;
    }
    public set operationLogs(operationLogs: Array<OperationLogInfo>  | undefined) {
        this['operation_logs'] = operationLogs;
    }
    public get operationLogs(): Array<OperationLogInfo> | undefined {
        return this['operation_logs'];
    }
    public withCommentLogs(commentLogs: Array<CommentLogInfo>): Show2dModelTrainingJobResponse {
        this['comment_logs'] = commentLogs;
        return this;
    }
    public set commentLogs(commentLogs: Array<CommentLogInfo>  | undefined) {
        this['comment_logs'] = commentLogs;
    }
    public get commentLogs(): Array<CommentLogInfo> | undefined {
        return this['comment_logs'];
    }
    public withIsMaskFileUploaded(isMaskFileUploaded: boolean): Show2dModelTrainingJobResponse {
        this['is_mask_file_uploaded'] = isMaskFileUploaded;
        return this;
    }
    public set isMaskFileUploaded(isMaskFileUploaded: boolean  | undefined) {
        this['is_mask_file_uploaded'] = isMaskFileUploaded;
    }
    public get isMaskFileUploaded(): boolean | undefined {
        return this['is_mask_file_uploaded'];
    }
    public withMaskFileDownloadUrl(maskFileDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['mask_file_download_url'] = maskFileDownloadUrl;
        return this;
    }
    public set maskFileDownloadUrl(maskFileDownloadUrl: string  | undefined) {
        this['mask_file_download_url'] = maskFileDownloadUrl;
    }
    public get maskFileDownloadUrl(): string | undefined {
        return this['mask_file_download_url'];
    }
    public withVerifyVideoDownloadUrl(verifyVideoDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['verify_video_download_url'] = verifyVideoDownloadUrl;
        return this;
    }
    public set verifyVideoDownloadUrl(verifyVideoDownloadUrl: string  | undefined) {
        this['verify_video_download_url'] = verifyVideoDownloadUrl;
    }
    public get verifyVideoDownloadUrl(): string | undefined {
        return this['verify_video_download_url'];
    }
    public withMarkableVideoDownloadUrl(markableVideoDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['markable_video_download_url'] = markableVideoDownloadUrl;
        return this;
    }
    public set markableVideoDownloadUrl(markableVideoDownloadUrl: string  | undefined) {
        this['markable_video_download_url'] = markableVideoDownloadUrl;
    }
    public get markableVideoDownloadUrl(): string | undefined {
        return this['markable_video_download_url'];
    }
    public withInferenceDataProcessVideoMarkInfo(inferenceDataProcessVideoMarkInfo: InferenceVideoMarkInfo): Show2dModelTrainingJobResponse {
        this['inference_data_process_video_mark_info'] = inferenceDataProcessVideoMarkInfo;
        return this;
    }
    public set inferenceDataProcessVideoMarkInfo(inferenceDataProcessVideoMarkInfo: InferenceVideoMarkInfo  | undefined) {
        this['inference_data_process_video_mark_info'] = inferenceDataProcessVideoMarkInfo;
    }
    public get inferenceDataProcessVideoMarkInfo(): InferenceVideoMarkInfo | undefined {
        return this['inference_data_process_video_mark_info'];
    }
    public withInferenceDataProcessActionMarkInfo(inferenceDataProcessActionMarkInfo: InferenceActionMarkInfo): Show2dModelTrainingJobResponse {
        this['inference_data_process_action_mark_info'] = inferenceDataProcessActionMarkInfo;
        return this;
    }
    public set inferenceDataProcessActionMarkInfo(inferenceDataProcessActionMarkInfo: InferenceActionMarkInfo  | undefined) {
        this['inference_data_process_action_mark_info'] = inferenceDataProcessActionMarkInfo;
    }
    public get inferenceDataProcessActionMarkInfo(): InferenceActionMarkInfo | undefined {
        return this['inference_data_process_action_mark_info'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): Show2dModelTrainingJobResponse {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withModelResolution(modelResolution: string): Show2dModelTrainingJobResponse {
        this['model_resolution'] = modelResolution;
        return this;
    }
    public set modelResolution(modelResolution: string  | undefined) {
        this['model_resolution'] = modelResolution;
    }
    public get modelResolution(): string | undefined {
        return this['model_resolution'];
    }
    public withXRequestId(xRequestId: string): Show2dModelTrainingJobResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseStateEnum {
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
export enum Show2dModelTrainingJobResponseModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseMattingTypeEnum {
    AI = 'AI',
    MANUAL = 'MANUAL'
}
