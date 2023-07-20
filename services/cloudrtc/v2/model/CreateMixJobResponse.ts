import { MixParam } from './MixParam';
import { RecordParam } from './RecordParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMixJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'stream_name'?: string;
    private 'app_id'?: string;
    private 'room_id'?: string;
    private 'mix_param'?: MixParam;
    private 'record_param'?: RecordParam;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: CreateMixJobResponseStateEnum | string;
    private 'stop_reason'?: CreateMixJobResponseStopReasonEnum | string;
    public description?: string;
    private 'start_time'?: string;
    private 'stop_time'?: string;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateMixJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStreamName(streamName: string): CreateMixJobResponse {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withAppId(appId: string): CreateMixJobResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRoomId(roomId: string): CreateMixJobResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withMixParam(mixParam: MixParam): CreateMixJobResponse {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: MixParam  | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam(): MixParam | undefined {
        return this['mix_param'];
    }
    public withRecordParam(recordParam: RecordParam): CreateMixJobResponse {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam  | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam(): RecordParam | undefined {
        return this['record_param'];
    }
    public withCreateTime(createTime: string): CreateMixJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateMixJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: CreateMixJobResponseStateEnum | string): CreateMixJobResponse {
        this['state'] = state;
        return this;
    }
    public withStopReason(stopReason: CreateMixJobResponseStopReasonEnum | string): CreateMixJobResponse {
        this['stop_reason'] = stopReason;
        return this;
    }
    public set stopReason(stopReason: CreateMixJobResponseStopReasonEnum | string  | undefined) {
        this['stop_reason'] = stopReason;
    }
    public get stopReason(): CreateMixJobResponseStopReasonEnum | string | undefined {
        return this['stop_reason'];
    }
    public withDescription(description: string): CreateMixJobResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): CreateMixJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): CreateMixJobResponse {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): string | undefined {
        return this['stop_time'];
    }
    public withXRequestId(xRequestId: string): CreateMixJobResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMixJobResponseStateEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMixJobResponseStopReasonEnum {
    TENANT_STOP = 'TENANT_STOP',
    EXCEED_MAX_IDLE_TIME = 'EXCEED_MAX_IDLE_TIME',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}
