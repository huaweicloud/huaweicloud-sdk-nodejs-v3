import { OneFsTaskResp } from './OneFsTaskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFsTasksResponse extends SdkResponse {
    public tasks?: Array<OneFsTaskResp>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<OneFsTaskResp>): ListFsTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withXRequestId(xRequestId: string): ListFsTasksResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}