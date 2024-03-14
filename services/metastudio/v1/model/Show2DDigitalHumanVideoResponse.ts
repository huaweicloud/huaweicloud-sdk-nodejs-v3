import { BackgroundMusicConfig } from './BackgroundMusicConfig';
import { DigitalHumanVideo } from './DigitalHumanVideo';
import { ErrorResponse } from './ErrorResponse';
import { OutputAssetInfo } from './OutputAssetInfo';
import { ShootScriptItem } from './ShootScriptItem';
import { VideoConfig } from './VideoConfig';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class Show2DDigitalHumanVideoResponse extends SdkResponse {
    private 'job_id'?: string;
    public state?: Show2DDigitalHumanVideoResponseStateEnum | string;
    private 'job_type'?: Show2DDigitalHumanVideoResponseJobTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public duration?: number;
    private 'output_asset_config'?: OutputAssetInfo;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'script_id'?: string;
    private 'video_making_type'?: Show2DDigitalHumanVideoResponseVideoMakingTypeEnum | string;
    private 'human_image'?: string;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: VideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'background_music_config'?: BackgroundMusicConfig;
    private 'X-Request-Id'?: string;
    public constructor(jobId?: string, state?: string) { 
        super();
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): Show2DDigitalHumanVideoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: Show2DDigitalHumanVideoResponseStateEnum | string): Show2DDigitalHumanVideoResponse {
        this['state'] = state;
        return this;
    }
    public withJobType(jobType: Show2DDigitalHumanVideoResponseJobTypeEnum | string): Show2DDigitalHumanVideoResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: Show2DDigitalHumanVideoResponseJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): Show2DDigitalHumanVideoResponseJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStartTime(startTime: string): Show2DDigitalHumanVideoResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): Show2DDigitalHumanVideoResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): Show2DDigitalHumanVideoResponse {
        this['duration'] = duration;
        return this;
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetInfo): Show2DDigitalHumanVideoResponse {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetInfo  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetInfo | undefined {
        return this['output_asset_config'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): Show2DDigitalHumanVideoResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): Show2DDigitalHumanVideoResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): Show2DDigitalHumanVideoResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withScriptId(scriptId: string): Show2DDigitalHumanVideoResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withVideoMakingType(videoMakingType: Show2DDigitalHumanVideoResponseVideoMakingTypeEnum | string): Show2DDigitalHumanVideoResponse {
        this['video_making_type'] = videoMakingType;
        return this;
    }
    public set videoMakingType(videoMakingType: Show2DDigitalHumanVideoResponseVideoMakingTypeEnum | string  | undefined) {
        this['video_making_type'] = videoMakingType;
    }
    public get videoMakingType(): Show2DDigitalHumanVideoResponseVideoMakingTypeEnum | string | undefined {
        return this['video_making_type'];
    }
    public withHumanImage(humanImage: string): Show2DDigitalHumanVideoResponse {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withModelAssetId(modelAssetId: string): Show2DDigitalHumanVideoResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): Show2DDigitalHumanVideoResponse {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: VideoConfig): Show2DDigitalHumanVideoResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): Show2DDigitalHumanVideoResponse {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withBackgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig): Show2DDigitalHumanVideoResponse {
        this['background_music_config'] = backgroundMusicConfig;
        return this;
    }
    public set backgroundMusicConfig(backgroundMusicConfig: BackgroundMusicConfig  | undefined) {
        this['background_music_config'] = backgroundMusicConfig;
    }
    public get backgroundMusicConfig(): BackgroundMusicConfig | undefined {
        return this['background_music_config'];
    }
    public withXRequestId(xRequestId: string): Show2DDigitalHumanVideoResponse {
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
export enum Show2DDigitalHumanVideoResponseStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    BLOCK = 'BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2DDigitalHumanVideoResponseJobTypeEnum {
    E_2D_DIGITAL_HUMAN_VIDEO = '2D_DIGITAL_HUMAN_VIDEO',
    DIGITAL_HUMAN_PHOTO_VIDEO = 'DIGITAL_HUMAN_PHOTO_VIDEO'
}
/**
    * @export
    * @enum {string}
    */
export enum Show2DDigitalHumanVideoResponseVideoMakingTypeEnum {
    MODEL = 'MODEL',
    PICTURE = 'PICTURE'
}
