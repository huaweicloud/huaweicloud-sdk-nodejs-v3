import { SlowlogItem } from './SlowlogItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowlogResponse extends SdkResponse {
    public count?: number;
    public slowlogs?: Array<SlowlogItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSlowlogResponse {
        this['count'] = count;
        return this;
    }
    public withSlowlogs(slowlogs: Array<SlowlogItem>): ListSlowlogResponse {
        this['slowlogs'] = slowlogs;
        return this;
    }
}