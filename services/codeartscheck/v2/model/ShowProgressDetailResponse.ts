import { ProgressDetailV2 } from './ProgressDetailV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProgressDetailResponse extends SdkResponse {
    private 'task_status'?: number;
    public progress?: ProgressDetailV2;
    public constructor() { 
        super();
    }
    public withTaskStatus(taskStatus: number): ShowProgressDetailResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
    public withProgress(progress: ProgressDetailV2): ShowProgressDetailResponse {
        this['progress'] = progress;
        return this;
    }
}