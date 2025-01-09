import { DesktopMetricNotifyRecord } from './DesktopMetricNotifyRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricNotifyRecordResponse extends SdkResponse {
    public count?: number;
    public items?: Array<DesktopMetricNotifyRecord>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListMetricNotifyRecordResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<DesktopMetricNotifyRecord>): ListMetricNotifyRecordResponse {
        this['items'] = items;
        return this;
    }
}