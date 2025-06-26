import { PageResp } from './PageResp';
import { ScheduleTaskExecuteDetail } from './ScheduleTaskExecuteDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskExecuteDetailResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ScheduleTaskExecuteDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTaskExecuteDetailResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ScheduleTaskExecuteDetail>): ListTaskExecuteDetailResponse {
        this['items'] = items;
        return this;
    }
}