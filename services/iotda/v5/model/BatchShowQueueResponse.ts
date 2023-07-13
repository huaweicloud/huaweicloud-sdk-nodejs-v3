import { Page } from './Page';
import { QueryQueueBase } from './QueryQueueBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowQueueResponse extends SdkResponse {
    public queues?: Array<QueryQueueBase>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withQueues(queues: Array<QueryQueueBase>): BatchShowQueueResponse {
        this['queues'] = queues;
        return this;
    }
    public withPage(page: Page): BatchShowQueueResponse {
        this['page'] = page;
        return this;
    }
}