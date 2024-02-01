import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { PlayPolicy } from './PlayPolicy';
import { VideoConfig } from './VideoConfig';


export class StartSmartLiveReq {
    private 'video_config'?: VideoConfig;
    private 'play_policy'?: PlayPolicy;
    private 'output_urls'?: Array<string>;
    private 'stream_keys'?: Array<string>;
    private 'interaction_callback_url'?: string;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'view_mode'?: StartSmartLiveReqViewModeEnum | string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum StartSmartLiveReqViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
