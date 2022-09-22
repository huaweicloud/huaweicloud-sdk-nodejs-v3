import { ListEventItems } from './ListEventItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ListEventItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ListEventItems>): ListEventResponse {
        this['items'] = items;
        return this;
    }
}