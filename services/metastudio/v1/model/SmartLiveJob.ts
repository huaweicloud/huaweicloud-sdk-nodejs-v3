import { CoStreamerConfig } from './CoStreamerConfig';
import { ErrorResponse } from './ErrorResponse';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveJobLog } from './LiveJobLog';
import { PlatformLiveDetailInfo } from './PlatformLiveDetailInfo';
import { RTCLiveEventCallBackConfig } from './RTCLiveEventCallBackConfig';
import { RTCRoomInfoList } from './RTCRoomInfoList';


export class SmartLiveJob {
    private 'job_id'?: string;
    private 'room_id'?: string;
    private 'room_name'?: string;
    public state?: SmartLiveJobStateEnum | string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'live_event_report_url'?: string;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'rtc_callback_config'?: RTCLiveEventCallBackConfig;
    private 'stream_duration'?: number;
    private 'block_reason'?: string;
    private 'cover_url'?: string;
    private 'co_streamer_config'?: CoStreamerConfig;
    private 'live_job_log'?: LiveJobLog;
    private 'relation_live_platform_info'?: PlatformLiveDetailInfo;
    private 'used_resource_type'?: SmartLiveJobUsedResourceTypeEnum | string;
    public constructor() { 
    }
    public withJobId(jobId: string): SmartLiveJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRoomId(roomId: string): SmartLiveJob {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRoomName(roomName: string): SmartLiveJob {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withState(state: SmartLiveJobStateEnum | string): SmartLiveJob {
        this['state'] = state;
        return this;
    }
    public withDuration(duration: number): SmartLiveJob {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): SmartLiveJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SmartLiveJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): SmartLiveJob {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): SmartLiveJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): SmartLiveJob {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): SmartLiveJob {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withLiveEventReportUrl(liveEventReportUrl: string): SmartLiveJob {
        this['live_event_report_url'] = liveEventReportUrl;
        return this;
    }
    public set liveEventReportUrl(liveEventReportUrl: string  | undefined) {
        this['live_event_report_url'] = liveEventReportUrl;
    }
    public get liveEventReportUrl(): string | undefined {
        return this['live_event_report_url'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): SmartLiveJob {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withRtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig): SmartLiveJob {
        this['rtc_callback_config'] = rtcCallbackConfig;
        return this;
    }
    public set rtcCallbackConfig(rtcCallbackConfig: RTCLiveEventCallBackConfig  | undefined) {
        this['rtc_callback_config'] = rtcCallbackConfig;
    }
    public get rtcCallbackConfig(): RTCLiveEventCallBackConfig | undefined {
        return this['rtc_callback_config'];
    }
    public withStreamDuration(streamDuration: number): SmartLiveJob {
        this['stream_duration'] = streamDuration;
        return this;
    }
    public set streamDuration(streamDuration: number  | undefined) {
        this['stream_duration'] = streamDuration;
    }
    public get streamDuration(): number | undefined {
        return this['stream_duration'];
    }
    public withBlockReason(blockReason: string): SmartLiveJob {
        this['block_reason'] = blockReason;
        return this;
    }
    public set blockReason(blockReason: string  | undefined) {
        this['block_reason'] = blockReason;
    }
    public get blockReason(): string | undefined {
        return this['block_reason'];
    }
    public withCoverUrl(coverUrl: string): SmartLiveJob {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withCoStreamerConfig(coStreamerConfig: CoStreamerConfig): SmartLiveJob {
        this['co_streamer_config'] = coStreamerConfig;
        return this;
    }
    public set coStreamerConfig(coStreamerConfig: CoStreamerConfig  | undefined) {
        this['co_streamer_config'] = coStreamerConfig;
    }
    public get coStreamerConfig(): CoStreamerConfig | undefined {
        return this['co_streamer_config'];
    }
    public withLiveJobLog(liveJobLog: LiveJobLog): SmartLiveJob {
        this['live_job_log'] = liveJobLog;
        return this;
    }
    public set liveJobLog(liveJobLog: LiveJobLog  | undefined) {
        this['live_job_log'] = liveJobLog;
    }
    public get liveJobLog(): LiveJobLog | undefined {
        return this['live_job_log'];
    }
    public withRelationLivePlatformInfo(relationLivePlatformInfo: PlatformLiveDetailInfo): SmartLiveJob {
        this['relation_live_platform_info'] = relationLivePlatformInfo;
        return this;
    }
    public set relationLivePlatformInfo(relationLivePlatformInfo: PlatformLiveDetailInfo  | undefined) {
        this['relation_live_platform_info'] = relationLivePlatformInfo;
    }
    public get relationLivePlatformInfo(): PlatformLiveDetailInfo | undefined {
        return this['relation_live_platform_info'];
    }
    public withUsedResourceType(usedResourceType: SmartLiveJobUsedResourceTypeEnum | string): SmartLiveJob {
        this['used_resource_type'] = usedResourceType;
        return this;
    }
    public set usedResourceType(usedResourceType: SmartLiveJobUsedResourceTypeEnum | string  | undefined) {
        this['used_resource_type'] = usedResourceType;
    }
    public get usedResourceType(): SmartLiveJobUsedResourceTypeEnum | string | undefined {
        return this['used_resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartLiveJobStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    BLOCKED = 'BLOCKED'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartLiveJobUsedResourceTypeEnum {
    PERIOD = 'PERIOD',
    ONDEMAND = 'ONDEMAND',
    UNKNOW = 'UNKNOW'
}
