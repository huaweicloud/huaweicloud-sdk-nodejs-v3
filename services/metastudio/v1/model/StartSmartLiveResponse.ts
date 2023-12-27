import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveWarningItem } from './LiveWarningItem';
import { RTCRoomInfoList } from './RTCRoomInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartSmartLiveResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'live_event_report_url'?: string;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'live_warning_info'?: Array<LiveWarningItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): StartSmartLiveResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): StartSmartLiveResponse {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withLiveEventReportUrl(liveEventReportUrl: string): StartSmartLiveResponse {
        this['live_event_report_url'] = liveEventReportUrl;
        return this;
    }
    public set liveEventReportUrl(liveEventReportUrl: string  | undefined) {
        this['live_event_report_url'] = liveEventReportUrl;
    }
    public get liveEventReportUrl(): string | undefined {
        return this['live_event_report_url'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): StartSmartLiveResponse {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withLiveWarningInfo(liveWarningInfo: Array<LiveWarningItem>): StartSmartLiveResponse {
        this['live_warning_info'] = liveWarningInfo;
        return this;
    }
    public set liveWarningInfo(liveWarningInfo: Array<LiveWarningItem>  | undefined) {
        this['live_warning_info'] = liveWarningInfo;
    }
    public get liveWarningInfo(): Array<LiveWarningItem> | undefined {
        return this['live_warning_info'];
    }
    public withXRequestId(xRequestId: string): StartSmartLiveResponse {
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