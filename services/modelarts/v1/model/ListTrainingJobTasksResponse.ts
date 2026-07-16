import { TaskHistory } from './TaskHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrainingJobTasksResponse extends SdkResponse {
    public body?: Array<TaskHistory>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TaskHistory>): ListTrainingJobTasksResponse {
        this['body'] = body;
        return this;
    }
}