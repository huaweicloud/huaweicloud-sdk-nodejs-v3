
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class Create2dModelTrainingJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'training_video_upload_url'?: Array<string>;
    private 'action_video_upload_url'?: Array<string>;
    private 'audio_upload_url'?: string;
    private 'cover_upload_url'?: string;
    private 'id_card_image1_upload_url'?: string;
    private 'id_card_image2_upload_url'?: string;
    private 'grant_file_upload_url'?: string;
    private 'pre_beauty_image_upload_url'?: string;
    private 'post_beauty_image_upload_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): Create2dModelTrainingJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTrainingVideoUploadUrl(trainingVideoUploadUrl: Array<string>): Create2dModelTrainingJobResponse {
        this['training_video_upload_url'] = trainingVideoUploadUrl;
        return this;
    }
    public set trainingVideoUploadUrl(trainingVideoUploadUrl: Array<string>  | undefined) {
        this['training_video_upload_url'] = trainingVideoUploadUrl;
    }
    public get trainingVideoUploadUrl(): Array<string> | undefined {
        return this['training_video_upload_url'];
    }
    public withActionVideoUploadUrl(actionVideoUploadUrl: Array<string>): Create2dModelTrainingJobResponse {
        this['action_video_upload_url'] = actionVideoUploadUrl;
        return this;
    }
    public set actionVideoUploadUrl(actionVideoUploadUrl: Array<string>  | undefined) {
        this['action_video_upload_url'] = actionVideoUploadUrl;
    }
    public get actionVideoUploadUrl(): Array<string> | undefined {
        return this['action_video_upload_url'];
    }
    public withAudioUploadUrl(audioUploadUrl: string): Create2dModelTrainingJobResponse {
        this['audio_upload_url'] = audioUploadUrl;
        return this;
    }
    public set audioUploadUrl(audioUploadUrl: string  | undefined) {
        this['audio_upload_url'] = audioUploadUrl;
    }
    public get audioUploadUrl(): string | undefined {
        return this['audio_upload_url'];
    }
    public withCoverUploadUrl(coverUploadUrl: string): Create2dModelTrainingJobResponse {
        this['cover_upload_url'] = coverUploadUrl;
        return this;
    }
    public set coverUploadUrl(coverUploadUrl: string  | undefined) {
        this['cover_upload_url'] = coverUploadUrl;
    }
    public get coverUploadUrl(): string | undefined {
        return this['cover_upload_url'];
    }
    public withIdCardImage1UploadUrl(idCardImage1UploadUrl: string): Create2dModelTrainingJobResponse {
        this['id_card_image1_upload_url'] = idCardImage1UploadUrl;
        return this;
    }
    public set idCardImage1UploadUrl(idCardImage1UploadUrl: string  | undefined) {
        this['id_card_image1_upload_url'] = idCardImage1UploadUrl;
    }
    public get idCardImage1UploadUrl(): string | undefined {
        return this['id_card_image1_upload_url'];
    }
    public withIdCardImage2UploadUrl(idCardImage2UploadUrl: string): Create2dModelTrainingJobResponse {
        this['id_card_image2_upload_url'] = idCardImage2UploadUrl;
        return this;
    }
    public set idCardImage2UploadUrl(idCardImage2UploadUrl: string  | undefined) {
        this['id_card_image2_upload_url'] = idCardImage2UploadUrl;
    }
    public get idCardImage2UploadUrl(): string | undefined {
        return this['id_card_image2_upload_url'];
    }
    public withGrantFileUploadUrl(grantFileUploadUrl: string): Create2dModelTrainingJobResponse {
        this['grant_file_upload_url'] = grantFileUploadUrl;
        return this;
    }
    public set grantFileUploadUrl(grantFileUploadUrl: string  | undefined) {
        this['grant_file_upload_url'] = grantFileUploadUrl;
    }
    public get grantFileUploadUrl(): string | undefined {
        return this['grant_file_upload_url'];
    }
    public withPreBeautyImageUploadUrl(preBeautyImageUploadUrl: string): Create2dModelTrainingJobResponse {
        this['pre_beauty_image_upload_url'] = preBeautyImageUploadUrl;
        return this;
    }
    public set preBeautyImageUploadUrl(preBeautyImageUploadUrl: string  | undefined) {
        this['pre_beauty_image_upload_url'] = preBeautyImageUploadUrl;
    }
    public get preBeautyImageUploadUrl(): string | undefined {
        return this['pre_beauty_image_upload_url'];
    }
    public withPostBeautyImageUploadUrl(postBeautyImageUploadUrl: string): Create2dModelTrainingJobResponse {
        this['post_beauty_image_upload_url'] = postBeautyImageUploadUrl;
        return this;
    }
    public set postBeautyImageUploadUrl(postBeautyImageUploadUrl: string  | undefined) {
        this['post_beauty_image_upload_url'] = postBeautyImageUploadUrl;
    }
    public get postBeautyImageUploadUrl(): string | undefined {
        return this['post_beauty_image_upload_url'];
    }
    public withXRequestId(xRequestId: string): Create2dModelTrainingJobResponse {
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