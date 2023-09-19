import { ErrorResponse } from './ErrorResponse';
import { RTCRoomInfoList } from './RTCRoomInfoList';


export class SmartLiveJob {
    private 'job_id'?: string;
    public state?: SmartLiveJobStateEnum | string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'live_event_report_url'?: string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum SmartLiveJobStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
