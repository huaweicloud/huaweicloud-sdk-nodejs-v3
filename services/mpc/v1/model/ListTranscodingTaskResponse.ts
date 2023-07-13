import { QueryTranscodingsTaskResponse } from './QueryTranscodingsTaskResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodingTaskResponse extends SdkResponse {
    private 'task_array'?: Array<QueryTranscodingsTaskResponse> | undefined;
    private 'is_truncated'?: number | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<QueryTranscodingsTaskResponse>): ListTranscodingTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<QueryTranscodingsTaskResponse> | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray() {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListTranscodingTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated() {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListTranscodingTaskResponse {
        this['total'] = total;
        return this;
    }
}