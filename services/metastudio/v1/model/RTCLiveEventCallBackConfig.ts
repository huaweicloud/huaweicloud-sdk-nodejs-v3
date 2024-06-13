

export class RTCLiveEventCallBackConfig {
    private 'rtc_callback_event_type'?: Array<string>;
    public constructor() { 
    }
    public withRtcCallbackEventType(rtcCallbackEventType: Array<string>): RTCLiveEventCallBackConfig {
        this['rtc_callback_event_type'] = rtcCallbackEventType;
        return this;
    }
    public set rtcCallbackEventType(rtcCallbackEventType: Array<string>  | undefined) {
        this['rtc_callback_event_type'] = rtcCallbackEventType;
    }
    public get rtcCallbackEventType(): Array<string> | undefined {
        return this['rtc_callback_event_type'];
    }
}