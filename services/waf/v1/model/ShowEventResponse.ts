import { ShowEventItems } from './ShowEventItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ShowEventItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowEventResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ShowEventItems>): ShowEventResponse {
        this['items'] = items;
        return this;
    }
}