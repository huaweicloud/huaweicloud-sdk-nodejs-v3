import { Page } from './Page';
import { Task } from './Task';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBatchTasksResponse extends SdkResponse {
    public batchtasks?: Array<Task>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withBatchtasks(batchtasks: Array<Task>): ListBatchTasksResponse {
        this['batchtasks'] = batchtasks;
        return this;
    }
    public withPage(page: Page): ListBatchTasksResponse {
        this['page'] = page;
        return this;
    }
}