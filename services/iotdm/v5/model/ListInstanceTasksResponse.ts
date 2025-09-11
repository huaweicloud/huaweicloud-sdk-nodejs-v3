import { InstanceTask } from './InstanceTask';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTasksResponse extends SdkResponse {
    public page?: Page;
    public tasks?: Array<InstanceTask>;
    public constructor() { 
        super();
    }
    public withPage(page: Page): ListInstanceTasksResponse {
        this['page'] = page;
        return this;
    }
    public withTasks(tasks: Array<InstanceTask>): ListInstanceTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}