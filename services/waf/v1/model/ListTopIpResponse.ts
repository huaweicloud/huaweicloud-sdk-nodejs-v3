import { CountItem } from './CountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopIpResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CountItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopIpResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CountItem>): ListTopIpResponse {
        this['items'] = items;
        return this;
    }
}