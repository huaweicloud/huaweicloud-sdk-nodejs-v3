import { UrlCountItem } from './UrlCountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopAbnormalResponse extends SdkResponse {
    public total?: number;
    public items?: Array<UrlCountItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopAbnormalResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<UrlCountItem>): ListTopAbnormalResponse {
        this['items'] = items;
        return this;
    }
}