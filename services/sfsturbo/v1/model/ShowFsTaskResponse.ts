import { FsDuInfo } from './FsDuInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFsTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public status?: ShowFsTaskResponseStatusEnum | string;
    private 'dir_usage'?: FsDuInfo;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowFsTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: ShowFsTaskResponseStatusEnum | string): ShowFsTaskResponse {
        this['status'] = status;
        return this;
    }
    public withDirUsage(dirUsage: FsDuInfo): ShowFsTaskResponse {
        this['dir_usage'] = dirUsage;
        return this;
    }
    public set dirUsage(dirUsage: FsDuInfo  | undefined) {
        this['dir_usage'] = dirUsage;
    }
    public get dirUsage(): FsDuInfo | undefined {
        return this['dir_usage'];
    }
    public withBeginTime(beginTime: string): ShowFsTaskResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowFsTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withXRequestId(xRequestId: string): ShowFsTaskResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFsTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    DOING = 'DOING',
    FAIL = 'FAIL'
}
