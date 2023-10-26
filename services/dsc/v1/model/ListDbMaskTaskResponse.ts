import { DBMaskTaskInfo } from './DBMaskTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbMaskTaskResponse extends SdkResponse {
    public tasks?: Array<DBMaskTaskInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<DBMaskTaskInfo>): ListDbMaskTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListDbMaskTaskResponse {
        this['total'] = total;
        return this;
    }
}