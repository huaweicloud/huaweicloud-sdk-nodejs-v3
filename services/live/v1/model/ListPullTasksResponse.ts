import { LivePullTaskInfo } from './LivePullTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPullTasksResponse extends SdkResponse {
    private 'task_infos'?: Array<LivePullTaskInfo>;
    private 'request_id'?: string;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskInfos(taskInfos: Array<LivePullTaskInfo>): ListPullTasksResponse {
        this['task_infos'] = taskInfos;
        return this;
    }
    public set taskInfos(taskInfos: Array<LivePullTaskInfo>  | undefined) {
        this['task_infos'] = taskInfos;
    }
    public get taskInfos(): Array<LivePullTaskInfo> | undefined {
        return this['task_infos'];
    }
    public withRequestId(requestId: string): ListPullTasksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotal(total: number): ListPullTasksResponse {
        this['total'] = total;
        return this;
    }
}