import { ActionSampleInfo } from './ActionSampleInfo';
import { CommentLogInfo } from './CommentLogInfo';
import { InferenceActionMarkInfo } from './InferenceActionMarkInfo';
import { InferenceEyeCorrectionMarkInfo } from './InferenceEyeCorrectionMarkInfo';
import { InferenceVideoMarkInfo } from './InferenceVideoMarkInfo';
import { OperationLogInfo } from './OperationLogInfo';
import { SubTrainingJobInfoDto } from './SubTrainingJobInfoDto';
import { SupportedServiceEnum } from './SupportedServiceEnum';
import { TrainingAllocatedResource } from './TrainingAllocatedResource';
import { TrainingJobBasicInfo } from './TrainingJobBasicInfo';
import { TrainingVideoMarkInfo } from './TrainingVideoMarkInfo';
import { VerifyVideoMattingInfo } from './VerifyVideoMattingInfo';
import { VoiceProperties } from './VoiceProperties';

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
    private 'model_resolution'?: string;
    private 'app_user_id'?: string;
    private 'is_flexus'?: boolean;
    private 'is_live_copy'?: boolean;
    private 'is_fast_flexus'?: boolean;
    private 'is_only_human_model'?: boolean;
    private 'optional_training_location'?: Array<string>;
    private 'is_background_replacement'?: boolean;
    private 'is_ondemand_resource'?: boolean;
    private 'training_video_download_url'?: string;
    private 'id_card_image1_download_url'?: string;
    private 'id_card_image2_download_url'?: string;
    private 'grant_file_download_url'?: string;
    private 'pre_beauty_image_download_url'?: string;
    private 'external_action_json_data_download_url'?: string;
    private 'action_video_download_url'?: string;
    private 'post_beauty_image_download_url'?: string;
    private 'audio_file_download_url'?: string;
    private 'action_mark_file_download_url'?: string;
    private 'action_mark_file_upload_url'?: string;
    private 'operation_logs'?: Array<OperationLogInfo>;
    private 'verify_video_matting_info'?: Array<VerifyVideoMattingInfo>;
    private 'comment_logs'?: Array<CommentLogInfo>;
    public samples?: Array<ActionSampleInfo>;
    private 'is_mask_file_uploaded'?: boolean;
    private 'mask_file_download_url'?: string;
    private 'verify_video_download_url'?: string;
    private 'markable_video_download_url'?: string;
    private 'markable_action_video_download_url'?: string;
    private 'traning_video_mark_info'?: TrainingVideoMarkInfo;
    private 'inference_data_process_video_mark_info'?: InferenceVideoMarkInfo;
    private 'voice_properties'?: VoiceProperties;
    private 'inference_data_process_action_mark_info'?: InferenceActionMarkInfo;
    private 'inference_data_process_chat_action_mark_info'?: InferenceActionMarkInfo;
    private 'inference_data_process_eye_correction_mark_info'?: InferenceEyeCorrectionMarkInfo;
    private 'worker_type'?: Array<string>;
    private 'voice_train_job_id'?: string;
    private 'flexus_retry_count'?: number;
    private 'audio_source_type'?: Show2dModelTrainingJobResponseAudioSourceTypeEnum | string;
    private 'supported_service'?: Array<SupportedServiceEnum>;
    private 'allocated_resource'?: TrainingAllocatedResource;
    private 'train_video_rotation_state'?: Show2dModelTrainingJobResponseTrainVideoRotationStateEnum | string;
    private 'action_video_rotation_state'?: Show2dModelTrainingJobResponseActionVideoRotationStateEnum | string;
    private 'sub_training_job_info'?: Array<SubTrainingJobInfoDto>;
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
    public withAppUserId(appUserId: string): Show2dModelTrainingJobResponse {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
    public withIsFlexus(isFlexus: boolean): Show2dModelTrainingJobResponse {
        this['is_flexus'] = isFlexus;
        return this;
    }
    public set isFlexus(isFlexus: boolean  | undefined) {
        this['is_flexus'] = isFlexus;
    }
    public get isFlexus(): boolean | undefined {
        return this['is_flexus'];
    }
    public withIsLiveCopy(isLiveCopy: boolean): Show2dModelTrainingJobResponse {
        this['is_live_copy'] = isLiveCopy;
        return this;
    }
    public set isLiveCopy(isLiveCopy: boolean  | undefined) {
        this['is_live_copy'] = isLiveCopy;
    }
    public get isLiveCopy(): boolean | undefined {
        return this['is_live_copy'];
    }
    public withIsFastFlexus(isFastFlexus: boolean): Show2dModelTrainingJobResponse {
        this['is_fast_flexus'] = isFastFlexus;
        return this;
    }
    public set isFastFlexus(isFastFlexus: boolean  | undefined) {
        this['is_fast_flexus'] = isFastFlexus;
    }
    public get isFastFlexus(): boolean | undefined {
        return this['is_fast_flexus'];
    }
    public withIsOnlyHumanModel(isOnlyHumanModel: boolean): Show2dModelTrainingJobResponse {
        this['is_only_human_model'] = isOnlyHumanModel;
        return this;
    }
    public set isOnlyHumanModel(isOnlyHumanModel: boolean  | undefined) {
        this['is_only_human_model'] = isOnlyHumanModel;
    }
    public get isOnlyHumanModel(): boolean | undefined {
        return this['is_only_human_model'];
    }
    public withOptionalTrainingLocation(optionalTrainingLocation: Array<string>): Show2dModelTrainingJobResponse {
        this['optional_training_location'] = optionalTrainingLocation;
        return this;
    }
    public set optionalTrainingLocation(optionalTrainingLocation: Array<string>  | undefined) {
        this['optional_training_location'] = optionalTrainingLocation;
    }
    public get optionalTrainingLocation(): Array<string> | undefined {
        return this['optional_training_location'];
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
    public withIsOndemandResource(isOndemandResource: boolean): Show2dModelTrainingJobResponse {
        this['is_ondemand_resource'] = isOndemandResource;
        return this;
    }
    public set isOndemandResource(isOndemandResource: boolean  | undefined) {
        this['is_ondemand_resource'] = isOndemandResource;
    }
    public get isOndemandResource(): boolean | undefined {
        return this['is_ondemand_resource'];
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
    public withPreBeautyImageDownloadUrl(preBeautyImageDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['pre_beauty_image_download_url'] = preBeautyImageDownloadUrl;
        return this;
    }
    public set preBeautyImageDownloadUrl(preBeautyImageDownloadUrl: string  | undefined) {
        this['pre_beauty_image_download_url'] = preBeautyImageDownloadUrl;
    }
    public get preBeautyImageDownloadUrl(): string | undefined {
        return this['pre_beauty_image_download_url'];
    }
    public withExternalActionJsonDataDownloadUrl(externalActionJsonDataDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['external_action_json_data_download_url'] = externalActionJsonDataDownloadUrl;
        return this;
    }
    public set externalActionJsonDataDownloadUrl(externalActionJsonDataDownloadUrl: string  | undefined) {
        this['external_action_json_data_download_url'] = externalActionJsonDataDownloadUrl;
    }
    public get externalActionJsonDataDownloadUrl(): string | undefined {
        return this['external_action_json_data_download_url'];
    }
    public withActionVideoDownloadUrl(actionVideoDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['action_video_download_url'] = actionVideoDownloadUrl;
        return this;
    }
    public set actionVideoDownloadUrl(actionVideoDownloadUrl: string  | undefined) {
        this['action_video_download_url'] = actionVideoDownloadUrl;
    }
    public get actionVideoDownloadUrl(): string | undefined {
        return this['action_video_download_url'];
    }
    public withPostBeautyImageDownloadUrl(postBeautyImageDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['post_beauty_image_download_url'] = postBeautyImageDownloadUrl;
        return this;
    }
    public set postBeautyImageDownloadUrl(postBeautyImageDownloadUrl: string  | undefined) {
        this['post_beauty_image_download_url'] = postBeautyImageDownloadUrl;
    }
    public get postBeautyImageDownloadUrl(): string | undefined {
        return this['post_beauty_image_download_url'];
    }
    public withAudioFileDownloadUrl(audioFileDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['audio_file_download_url'] = audioFileDownloadUrl;
        return this;
    }
    public set audioFileDownloadUrl(audioFileDownloadUrl: string  | undefined) {
        this['audio_file_download_url'] = audioFileDownloadUrl;
    }
    public get audioFileDownloadUrl(): string | undefined {
        return this['audio_file_download_url'];
    }
    public withActionMarkFileDownloadUrl(actionMarkFileDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['action_mark_file_download_url'] = actionMarkFileDownloadUrl;
        return this;
    }
    public set actionMarkFileDownloadUrl(actionMarkFileDownloadUrl: string  | undefined) {
        this['action_mark_file_download_url'] = actionMarkFileDownloadUrl;
    }
    public get actionMarkFileDownloadUrl(): string | undefined {
        return this['action_mark_file_download_url'];
    }
    public withActionMarkFileUploadUrl(actionMarkFileUploadUrl: string): Show2dModelTrainingJobResponse {
        this['action_mark_file_upload_url'] = actionMarkFileUploadUrl;
        return this;
    }
    public set actionMarkFileUploadUrl(actionMarkFileUploadUrl: string  | undefined) {
        this['action_mark_file_upload_url'] = actionMarkFileUploadUrl;
    }
    public get actionMarkFileUploadUrl(): string | undefined {
        return this['action_mark_file_upload_url'];
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
    public withVerifyVideoMattingInfo(verifyVideoMattingInfo: Array<VerifyVideoMattingInfo>): Show2dModelTrainingJobResponse {
        this['verify_video_matting_info'] = verifyVideoMattingInfo;
        return this;
    }
    public set verifyVideoMattingInfo(verifyVideoMattingInfo: Array<VerifyVideoMattingInfo>  | undefined) {
        this['verify_video_matting_info'] = verifyVideoMattingInfo;
    }
    public get verifyVideoMattingInfo(): Array<VerifyVideoMattingInfo> | undefined {
        return this['verify_video_matting_info'];
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
    public withSamples(samples: Array<ActionSampleInfo>): Show2dModelTrainingJobResponse {
        this['samples'] = samples;
        return this;
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
    public withMarkableActionVideoDownloadUrl(markableActionVideoDownloadUrl: string): Show2dModelTrainingJobResponse {
        this['markable_action_video_download_url'] = markableActionVideoDownloadUrl;
        return this;
    }
    public set markableActionVideoDownloadUrl(markableActionVideoDownloadUrl: string  | undefined) {
        this['markable_action_video_download_url'] = markableActionVideoDownloadUrl;
    }
    public get markableActionVideoDownloadUrl(): string | undefined {
        return this['markable_action_video_download_url'];
    }
    public withTraningVideoMarkInfo(traningVideoMarkInfo: TrainingVideoMarkInfo): Show2dModelTrainingJobResponse {
        this['traning_video_mark_info'] = traningVideoMarkInfo;
        return this;
    }
    public set traningVideoMarkInfo(traningVideoMarkInfo: TrainingVideoMarkInfo  | undefined) {
        this['traning_video_mark_info'] = traningVideoMarkInfo;
    }
    public get traningVideoMarkInfo(): TrainingVideoMarkInfo | undefined {
        return this['traning_video_mark_info'];
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
    public withVoiceProperties(voiceProperties: VoiceProperties): Show2dModelTrainingJobResponse {
        this['voice_properties'] = voiceProperties;
        return this;
    }
    public set voiceProperties(voiceProperties: VoiceProperties  | undefined) {
        this['voice_properties'] = voiceProperties;
    }
    public get voiceProperties(): VoiceProperties | undefined {
        return this['voice_properties'];
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
    public withInferenceDataProcessChatActionMarkInfo(inferenceDataProcessChatActionMarkInfo: InferenceActionMarkInfo): Show2dModelTrainingJobResponse {
        this['inference_data_process_chat_action_mark_info'] = inferenceDataProcessChatActionMarkInfo;
        return this;
    }
    public set inferenceDataProcessChatActionMarkInfo(inferenceDataProcessChatActionMarkInfo: InferenceActionMarkInfo  | undefined) {
        this['inference_data_process_chat_action_mark_info'] = inferenceDataProcessChatActionMarkInfo;
    }
    public get inferenceDataProcessChatActionMarkInfo(): InferenceActionMarkInfo | undefined {
        return this['inference_data_process_chat_action_mark_info'];
    }
    public withInferenceDataProcessEyeCorrectionMarkInfo(inferenceDataProcessEyeCorrectionMarkInfo: InferenceEyeCorrectionMarkInfo): Show2dModelTrainingJobResponse {
        this['inference_data_process_eye_correction_mark_info'] = inferenceDataProcessEyeCorrectionMarkInfo;
        return this;
    }
    public set inferenceDataProcessEyeCorrectionMarkInfo(inferenceDataProcessEyeCorrectionMarkInfo: InferenceEyeCorrectionMarkInfo  | undefined) {
        this['inference_data_process_eye_correction_mark_info'] = inferenceDataProcessEyeCorrectionMarkInfo;
    }
    public get inferenceDataProcessEyeCorrectionMarkInfo(): InferenceEyeCorrectionMarkInfo | undefined {
        return this['inference_data_process_eye_correction_mark_info'];
    }
    public withWorkerType(workerType: Array<string>): Show2dModelTrainingJobResponse {
        this['worker_type'] = workerType;
        return this;
    }
    public set workerType(workerType: Array<string>  | undefined) {
        this['worker_type'] = workerType;
    }
    public get workerType(): Array<string> | undefined {
        return this['worker_type'];
    }
    public withVoiceTrainJobId(voiceTrainJobId: string): Show2dModelTrainingJobResponse {
        this['voice_train_job_id'] = voiceTrainJobId;
        return this;
    }
    public set voiceTrainJobId(voiceTrainJobId: string  | undefined) {
        this['voice_train_job_id'] = voiceTrainJobId;
    }
    public get voiceTrainJobId(): string | undefined {
        return this['voice_train_job_id'];
    }
    public withFlexusRetryCount(flexusRetryCount: number): Show2dModelTrainingJobResponse {
        this['flexus_retry_count'] = flexusRetryCount;
        return this;
    }
    public set flexusRetryCount(flexusRetryCount: number  | undefined) {
        this['flexus_retry_count'] = flexusRetryCount;
    }
    public get flexusRetryCount(): number | undefined {
        return this['flexus_retry_count'];
    }
    public withAudioSourceType(audioSourceType: Show2dModelTrainingJobResponseAudioSourceTypeEnum | string): Show2dModelTrainingJobResponse {
        this['audio_source_type'] = audioSourceType;
        return this;
    }
    public set audioSourceType(audioSourceType: Show2dModelTrainingJobResponseAudioSourceTypeEnum | string  | undefined) {
        this['audio_source_type'] = audioSourceType;
    }
    public get audioSourceType(): Show2dModelTrainingJobResponseAudioSourceTypeEnum | string | undefined {
        return this['audio_source_type'];
    }
    public withSupportedService(supportedService: Array<SupportedServiceEnum>): Show2dModelTrainingJobResponse {
        this['supported_service'] = supportedService;
        return this;
    }
    public set supportedService(supportedService: Array<SupportedServiceEnum>  | undefined) {
        this['supported_service'] = supportedService;
    }
    public get supportedService(): Array<SupportedServiceEnum> | undefined {
        return this['supported_service'];
    }
    public withAllocatedResource(allocatedResource: TrainingAllocatedResource): Show2dModelTrainingJobResponse {
        this['allocated_resource'] = allocatedResource;
        return this;
    }
    public set allocatedResource(allocatedResource: TrainingAllocatedResource  | undefined) {
        this['allocated_resource'] = allocatedResource;
    }
    public get allocatedResource(): TrainingAllocatedResource | undefined {
        return this['allocated_resource'];
    }
    public withTrainVideoRotationState(trainVideoRotationState: Show2dModelTrainingJobResponseTrainVideoRotationStateEnum | string): Show2dModelTrainingJobResponse {
        this['train_video_rotation_state'] = trainVideoRotationState;
        return this;
    }
    public set trainVideoRotationState(trainVideoRotationState: Show2dModelTrainingJobResponseTrainVideoRotationStateEnum | string  | undefined) {
        this['train_video_rotation_state'] = trainVideoRotationState;
    }
    public get trainVideoRotationState(): Show2dModelTrainingJobResponseTrainVideoRotationStateEnum | string | undefined {
        return this['train_video_rotation_state'];
    }
    public withActionVideoRotationState(actionVideoRotationState: Show2dModelTrainingJobResponseActionVideoRotationStateEnum | string): Show2dModelTrainingJobResponse {
        this['action_video_rotation_state'] = actionVideoRotationState;
        return this;
    }
    public set actionVideoRotationState(actionVideoRotationState: Show2dModelTrainingJobResponseActionVideoRotationStateEnum | string  | undefined) {
        this['action_video_rotation_state'] = actionVideoRotationState;
    }
    public get actionVideoRotationState(): Show2dModelTrainingJobResponseActionVideoRotationStateEnum | string | undefined {
        return this['action_video_rotation_state'];
    }
    public withSubTrainingJobInfo(subTrainingJobInfo: Array<SubTrainingJobInfoDto>): Show2dModelTrainingJobResponse {
        this['sub_training_job_info'] = subTrainingJobInfo;
        return this;
    }
    public set subTrainingJobInfo(subTrainingJobInfo: Array<SubTrainingJobInfoDto>  | undefined) {
        this['sub_training_job_info'] = subTrainingJobInfo;
    }
    public get subTrainingJobInfo(): Array<SubTrainingJobInfoDto> | undefined {
        return this['sub_training_job_info'];
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
export enum Show2dModelTrainingJobResponseModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3.2',
    V3_3 = 'V3.3'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseMattingTypeEnum {
    AI = 'AI',
    MANUAL = 'MANUAL'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseAudioSourceTypeEnum {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseTrainVideoRotationStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2dModelTrainingJobResponseActionVideoRotationStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
