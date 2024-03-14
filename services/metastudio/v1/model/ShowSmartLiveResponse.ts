import { CoStreamerConfig } from './CoStreamerConfig';
import { ErrorResponse } from './ErrorResponse';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveJobLog } from './LiveJobLog';
import { RTCRoomInfoList } from './RTCRoomInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmartLiveResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'room_id'?: string;
    private 'room_name'?: string;
    public state?: ShowSmartLiveResponseStateEnum | string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'live_event_report_url'?: string;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'stream_duration'?: number;
    private 'block_reason'?: string;
    private 'cover_url'?: string;
    private 'co_streamer_config'?: CoStreamerConfig;
    private 'live_job_log'?: LiveJobLog;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowSmartLiveResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRoomId(roomId: string): ShowSmartLiveResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRoomName(roomName: string): ShowSmartLiveResponse {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withState(state: ShowSmartLiveResponseStateEnum | string): ShowSmartLiveResponse {
        this['state'] = state;
        return this;
    }
    public withDuration(duration: number): ShowSmartLiveResponse {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): ShowSmartLiveResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowSmartLiveResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): ShowSmartLiveResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): ShowSmartLiveResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): ShowSmartLiveResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): ShowSmartLiveResponse {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withLiveEventReportUrl(liveEventReportUrl: string): ShowSmartLiveResponse {
        this['live_event_report_url'] = liveEventReportUrl;
        return this;
    }
    public set liveEventReportUrl(liveEventReportUrl: string  | undefined) {
        this['live_event_report_url'] = liveEventReportUrl;
    }
    public get liveEventReportUrl(): string | undefined {
        return this['live_event_report_url'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): ShowSmartLiveResponse {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withStreamDuration(streamDuration: number): ShowSmartLiveResponse {
        this['stream_duration'] = streamDuration;
        return this;
    }
    public set streamDuration(streamDuration: number  | undefined) {
        this['stream_duration'] = streamDuration;
    }
    public get streamDuration(): number | undefined {
        return this['stream_duration'];
    }
    public withBlockReason(blockReason: string): ShowSmartLiveResponse {
        this['block_reason'] = blockReason;
        return this;
    }
    public set blockReason(blockReason: string  | undefined) {
        this['block_reason'] = blockReason;
    }
    public get blockReason(): string | undefined {
        return this['block_reason'];
    }
    public withCoverUrl(coverUrl: string): ShowSmartLiveResponse {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withCoStreamerConfig(coStreamerConfig: CoStreamerConfig): ShowSmartLiveResponse {
        this['co_streamer_config'] = coStreamerConfig;
        return this;
    }
    public set coStreamerConfig(coStreamerConfig: CoStreamerConfig  | undefined) {
        this['co_streamer_config'] = coStreamerConfig;
    }
    public get coStreamerConfig(): CoStreamerConfig | undefined {
        return this['co_streamer_config'];
    }
    public withLiveJobLog(liveJobLog: LiveJobLog): ShowSmartLiveResponse {
        this['live_job_log'] = liveJobLog;
        return this;
    }
    public set liveJobLog(liveJobLog: LiveJobLog  | undefined) {
        this['live_job_log'] = liveJobLog;
    }
    public get liveJobLog(): LiveJobLog | undefined {
        return this['live_job_log'];
    }
    public withXRequestId(xRequestId: string): ShowSmartLiveResponse {
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
export enum ShowSmartLiveResponseStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    BLOCKED = 'BLOCKED'
}
