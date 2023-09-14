import { TaskResponseBody } from './TaskResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAssociateKeypairResponse extends SdkResponse {
    public tasks?: Array<TaskResponseBody>;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<TaskResponseBody>): BatchAssociateKeypairResponse {
        this['tasks'] = tasks;
        return this;
    }
}