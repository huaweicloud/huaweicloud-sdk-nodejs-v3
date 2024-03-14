import { DigitalHumanVideo } from './DigitalHumanVideo';
import { ErrorResponse } from './ErrorResponse';
import { OutputAssetInfo } from './OutputAssetInfo';
import { PhotoVideoConfig } from './PhotoVideoConfig';
import { ShootScriptItem } from './ShootScriptItem';
import { VoiceConfig } from './VoiceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPhotoDigitalHumanVideoResponse extends SdkResponse {
    private 'job_id'?: string;
    public state?: ShowPhotoDigitalHumanVideoResponseStateEnum | string;
    private 'job_type'?: ShowPhotoDigitalHumanVideoResponseJobTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public duration?: number;
    private 'output_asset_config'?: OutputAssetInfo;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'script_id'?: string;
    private 'human_image'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'video_config'?: PhotoVideoConfig;
    private 'shoot_scripts'?: Array<ShootScriptItem>;
    private 'X-Request-Id'?: string;
    public constructor(jobId?: string, state?: string) { 
        super();
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): ShowPhotoDigitalHumanVideoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: ShowPhotoDigitalHumanVideoResponseStateEnum | string): ShowPhotoDigitalHumanVideoResponse {
        this['state'] = state;
        return this;
    }
    public withJobType(jobType: ShowPhotoDigitalHumanVideoResponseJobTypeEnum | string): ShowPhotoDigitalHumanVideoResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ShowPhotoDigitalHumanVideoResponseJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ShowPhotoDigitalHumanVideoResponseJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStartTime(startTime: string): ShowPhotoDigitalHumanVideoResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowPhotoDigitalHumanVideoResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): ShowPhotoDigitalHumanVideoResponse {
        this['duration'] = duration;
        return this;
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetInfo): ShowPhotoDigitalHumanVideoResponse {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetInfo  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetInfo | undefined {
        return this['output_asset_config'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): ShowPhotoDigitalHumanVideoResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): ShowPhotoDigitalHumanVideoResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): ShowPhotoDigitalHumanVideoResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withScriptId(scriptId: string): ShowPhotoDigitalHumanVideoResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withHumanImage(humanImage: string): ShowPhotoDigitalHumanVideoResponse {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): ShowPhotoDigitalHumanVideoResponse {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withVideoConfig(videoConfig: PhotoVideoConfig): ShowPhotoDigitalHumanVideoResponse {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: PhotoVideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): PhotoVideoConfig | undefined {
        return this['video_config'];
    }
    public withShootScripts(shootScripts: Array<ShootScriptItem>): ShowPhotoDigitalHumanVideoResponse {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<ShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<ShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
    public withXRequestId(xRequestId: string): ShowPhotoDigitalHumanVideoResponse {
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
export enum ShowPhotoDigitalHumanVideoResponseStateEnum {
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
export enum ShowPhotoDigitalHumanVideoResponseJobTypeEnum {
    E_2D_DIGITAL_HUMAN_VIDEO = '2D_DIGITAL_HUMAN_VIDEO',
    DIGITAL_HUMAN_PHOTO_VIDEO = 'DIGITAL_HUMAN_PHOTO_VIDEO'
}
