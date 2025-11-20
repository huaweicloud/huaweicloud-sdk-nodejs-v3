import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveExitConfig } from './LiveExitConfig';
import { LiveNotifyConfig } from './LiveNotifyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmartLiveUserConfigResponse extends SdkResponse {
    private 'live_exit_config'?: LiveExitConfig;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'live_notify_config'?: LiveNotifyConfig;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLiveExitConfig(liveExitConfig: LiveExitConfig): ShowSmartLiveUserConfigResponse {
        this['live_exit_config'] = liveExitConfig;
        return this;
    }
    public set liveExitConfig(liveExitConfig: LiveExitConfig  | undefined) {
        this['live_exit_config'] = liveExitConfig;
    }
    public get liveExitConfig(): LiveExitConfig | undefined {
        return this['live_exit_config'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): ShowSmartLiveUserConfigResponse {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withLiveNotifyConfig(liveNotifyConfig: LiveNotifyConfig): ShowSmartLiveUserConfigResponse {
        this['live_notify_config'] = liveNotifyConfig;
        return this;
    }
    public set liveNotifyConfig(liveNotifyConfig: LiveNotifyConfig  | undefined) {
        this['live_notify_config'] = liveNotifyConfig;
    }
    public get liveNotifyConfig(): LiveNotifyConfig | undefined {
        return this['live_notify_config'];
    }
    public withXRequestId(xRequestId: string): ShowSmartLiveUserConfigResponse {
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