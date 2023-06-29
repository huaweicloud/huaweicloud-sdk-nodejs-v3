import { TaskDetailInfo } from './TaskDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeDetailResponse extends SdkResponse {
    private 'task_array'?: Array<TaskDetailInfo> | undefined;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<TaskDetailInfo>): ListTranscodeDetailResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<TaskDetailInfo> | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray() {
        return this['task_array'];
    }
}