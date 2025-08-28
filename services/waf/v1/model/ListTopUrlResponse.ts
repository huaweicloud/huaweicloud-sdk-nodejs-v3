import { UrlCountItem } from './UrlCountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopUrlResponse extends SdkResponse {
    public total?: number;
    public items?: Array<UrlCountItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopUrlResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<UrlCountItem>): ListTopUrlResponse {
        this['items'] = items;
        return this;
    }
}