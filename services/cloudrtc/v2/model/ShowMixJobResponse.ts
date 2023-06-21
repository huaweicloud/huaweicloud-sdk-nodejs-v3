import { MixParam } from './MixParam';
import { RecordParam } from './RecordParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMixJobResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'stream_name'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'room_id'?: string | undefined;
    private 'mix_param'?: MixParam | undefined;
    private 'record_param'?: RecordParam | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: ShowMixJobResponseStateEnum;
    private 'stop_reason'?: ShowMixJobResponseStopReasonEnum | undefined;
    public description?: string;
    private 'start_time'?: string | undefined;
    private 'stop_time'?: string | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowMixJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStreamName(streamName: string): ShowMixJobResponse {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
    public withAppId(appId: string): ShowMixJobResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withRoomId(roomId: string): ShowMixJobResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withMixParam(mixParam: MixParam): ShowMixJobResponse {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: MixParam | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam() {
        return this['mix_param'];
    }
    public withRecordParam(recordParam: RecordParam): ShowMixJobResponse {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam() {
        return this['record_param'];
    }
    public withCreateTime(createTime: string): ShowMixJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowMixJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: ShowMixJobResponseStateEnum): ShowMixJobResponse {
        this['state'] = state;
        return this;
    }
    public withStopReason(stopReason: ShowMixJobResponseStopReasonEnum): ShowMixJobResponse {
        this['stop_reason'] = stopReason;
        return this;
    }
    public set stopReason(stopReason: ShowMixJobResponseStopReasonEnum | undefined) {
        this['stop_reason'] = stopReason;
    }
    public get stopReason() {
        return this['stop_reason'];
    }
    public withDescription(description: string): ShowMixJobResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): ShowMixJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): ShowMixJobResponse {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime() {
        return this['stop_time'];
    }
    public withXRequestId(xRequestId: string): ShowMixJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMixJobResponseStateEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMixJobResponseStopReasonEnum {
    TENANT_STOP = 'TENANT_STOP',
    EXCEED_MAX_IDLE_TIME = 'EXCEED_MAX_IDLE_TIME',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}
