import { EventSampleItemInfo } from './EventSampleItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowListOfEventSampleResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<EventSampleItemInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowListOfEventSampleResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ShowListOfEventSampleResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<EventSampleItemInfo>): ShowListOfEventSampleResponse {
        this['items'] = items;
        return this;
    }
}