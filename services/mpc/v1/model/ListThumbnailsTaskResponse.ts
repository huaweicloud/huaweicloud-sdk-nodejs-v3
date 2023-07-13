import { ThumbTask } from './ThumbTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListThumbnailsTaskResponse extends SdkResponse {
    private 'task_array'?: Array<ThumbTask> | undefined;
    private 'is_truncated'?: number | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<ThumbTask>): ListThumbnailsTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<ThumbTask> | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray() {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListThumbnailsTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated() {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListThumbnailsTaskResponse {
        this['total'] = total;
        return this;
    }
}