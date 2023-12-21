import { TaskResult } from './TaskResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStorageModeResponse extends SdkResponse {
    private 'task_result_array'?: Array<TaskResult>;
    public constructor() { 
        super();
    }
    public withTaskResultArray(taskResultArray: Array<TaskResult>): UpdateStorageModeResponse {
        this['task_result_array'] = taskResultArray;
        return this;
    }
    public set taskResultArray(taskResultArray: Array<TaskResult>  | undefined) {
        this['task_result_array'] = taskResultArray;
    }
    public get taskResultArray(): Array<TaskResult> | undefined {
        return this['task_result_array'];
    }
}