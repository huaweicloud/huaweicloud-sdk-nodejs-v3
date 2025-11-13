import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveExitConfig } from './LiveExitConfig';
import { LiveNotifyConfigReq } from './LiveNotifyConfigReq';


export class UpdateSmartLiveUserConfigReq {
    private 'live_exit_config'?: LiveExitConfig;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'live_notify_config'?: LiveNotifyConfigReq;
    public constructor() { 
    }
    public withLiveExitConfig(liveExitConfig: LiveExitConfig): UpdateSmartLiveUserConfigReq {
        this['live_exit_config'] = liveExitConfig;
        return this;
    }
    public set liveExitConfig(liveExitConfig: LiveExitConfig  | undefined) {
        this['live_exit_config'] = liveExitConfig;
    }
    public get liveExitConfig(): LiveExitConfig | undefined {
        return this['live_exit_config'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): UpdateSmartLiveUserConfigReq {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withLiveNotifyConfig(liveNotifyConfig: LiveNotifyConfigReq): UpdateSmartLiveUserConfigReq {
        this['live_notify_config'] = liveNotifyConfig;
        return this;
    }
    public set liveNotifyConfig(liveNotifyConfig: LiveNotifyConfigReq  | undefined) {
        this['live_notify_config'] = liveNotifyConfig;
    }
    public get liveNotifyConfig(): LiveNotifyConfigReq | undefined {
        return this['live_notify_config'];
    }
}