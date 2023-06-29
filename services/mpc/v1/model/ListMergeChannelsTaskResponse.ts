import { MergeChannelsTaskInfo } from './MergeChannelsTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeChannelsTaskResponse extends SdkResponse {
    private 'task_array'?: Array<MergeChannelsTaskInfo> | undefined;
    private 'is_truncated'?: number | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<MergeChannelsTaskInfo>): ListMergeChannelsTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<MergeChannelsTaskInfo> | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray() {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListMergeChannelsTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated() {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListMergeChannelsTaskResponse {
        this['total'] = total;
        return this;
    }
}