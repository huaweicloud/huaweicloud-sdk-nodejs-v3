import { MediaProcessTaskInfo } from './MediaProcessTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMediaProcessTaskResponse extends SdkResponse {
    private 'task_array'?: Array<MediaProcessTaskInfo>;
    private 'is_truncated'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<MediaProcessTaskInfo>): ListMediaProcessTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<MediaProcessTaskInfo>  | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray(): Array<MediaProcessTaskInfo> | undefined {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListMediaProcessTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): number | undefined {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListMediaProcessTaskResponse {
        this['total'] = total;
        return this;
    }
}