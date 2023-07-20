import { ResetTracksTaskInfo } from './ResetTracksTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResetTracksTaskResponse extends SdkResponse {
    private 'task_array'?: Array<ResetTracksTaskInfo>;
    private 'is_truncated'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<ResetTracksTaskInfo>): ListResetTracksTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<ResetTracksTaskInfo>  | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray(): Array<ResetTracksTaskInfo> | undefined {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListResetTracksTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): number | undefined {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListResetTracksTaskResponse {
        this['total'] = total;
        return this;
    }
}