import { CoStreamerConfig } from './CoStreamerConfig';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveJobRunConfig } from './LiveJobRunConfig';
import { PlayPolicy } from './PlayPolicy';
import { RTCLiveEventCallBackConfig } from './RTCLiveEventCallBackConfig';
import { VideoConfig } from './VideoConfig';


export class StartSmartLiveReq {
    private 'video_config'?: VideoConfig;
    private 'play_policy'?: PlayPolicy;
    private 'output_urls'?: Array<string>;
    private 'stream_keys'?: Array<string>;
    private 'interaction_callback_url'?: string;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'rtc_callback_config'?: RTCLiveEventCallBackConfig;
    private 'view_mode'?: StartSmartLiveReqViewModeEnum | string;
    private 'co_streamer_config'?: CoStreamerConfig;
    private 'job_run_config'?: LiveJobRunConfig;
    public constructor() { 
    }
    public withVideoConfig(videoConfig: VideoConfig): StartSmartLiveReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): StartSmartLiveReq {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withOutputUrls(outputUrls: Array<string>): StartSmartLiveReq {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
    public withStreamKeys(streamKeys: Array<string>): StartSmartLiveReq {
        this['stream_keys'] = streamKeys;
        return this;
    }
    public set streamKeys(streamKeys: Array<string>  | undefined) {
        this['stream_keys'] = streamKeys;
    }
    public get streamKeys(): Array<string> | undefined {
        return this['stream_keys'];
    }
    public withInteractionCallbackUrl(interactionCallbackUrl: string): StartSmartLiveReq {
        this['interaction_callback_url'] = interactionCallbackUrl;
        return this;
    }
    public set interactionCallbackUrl(interactionCallbackUrl: string  | undefined) {
        this['interaction_callback_url'] = interactionCallbackUrl;
    }
    public get interactionCallbackUrl(): string | undefined {
        return this['interaction_callback_url'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): StartSmartLiveReq {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withRtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig): StartSmartLiveReq {
        this['rtc_callback_config'] = rtcCallbackConfig;
        return this;
    }
    public set rtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig  | undefined) {
        this['rtc_callback_config'] = rtcCallbackConfig;
    }
    public get rtcCallbackConfig(): RTCLiveEventCallBackConfig | undefined {
        return this['rtc_callback_config'];
    }
    public withViewMode(viewMode: StartSmartLiveReqViewModeEnum | string): StartSmartLiveReq {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: StartSmartLiveReqViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): StartSmartLiveReqViewModeEnum | string | undefined {
        return this['view_mode'];
    }
    public withCoStreamerConfig(coStreamerConfig: CoStreamerConfig): StartSmartLiveReq {
        this['co_streamer_config'] = coStreamerConfig;
        return this;
    }
    public set coStreamerConfig(coStreamerConfig: CoStreamerConfig  | undefined) {
        this['co_streamer_config'] = coStreamerConfig;
    }
    public get coStreamerConfig(): CoStreamerConfig | undefined {
        return this['co_streamer_config'];
    }
    public withJobRunConfig(jobRunConfig: LiveJobRunConfig): StartSmartLiveReq {
        this['job_run_config'] = jobRunConfig;
        return this;
    }
    public set jobRunConfig(jobRunConfig: LiveJobRunConfig  | undefined) {
        this['job_run_config'] = jobRunConfig;
    }
    public get jobRunConfig(): LiveJobRunConfig | undefined {
        return this['job_run_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartSmartLiveReqViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
