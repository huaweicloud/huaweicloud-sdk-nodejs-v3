import { PageResp } from './PageResp';
import { ScheduleTaskExecuteHistory } from './ScheduleTaskExecuteHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskExecuteHistoryResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ScheduleTaskExecuteHistory>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTaskExecuteHistoryResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ScheduleTaskExecuteHistory>): ListTaskExecuteHistoryResponse {
        this['items'] = items;
        return this;
    }
}