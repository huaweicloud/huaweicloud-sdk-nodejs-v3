import { TaskLogsContent } from './TaskLogsContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskLogsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'task_logs_content_list'?: Array<TaskLogsContent>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListTaskLogsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListTaskLogsResponse {
        this['message'] = message;
        return this;
    }
    public withTaskLogsContentList(taskLogsContentList: Array<TaskLogsContent>): ListTaskLogsResponse {
        this['task_logs_content_list'] = taskLogsContentList;
        return this;
    }
    public set taskLogsContentList(taskLogsContentList: Array<TaskLogsContent>  | undefined) {
        this['task_logs_content_list'] = taskLogsContentList;
    }
    public get taskLogsContentList(): Array<TaskLogsContent> | undefined {
        return this['task_logs_content_list'];
    }
}