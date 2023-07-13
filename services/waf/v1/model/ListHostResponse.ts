import { CloudWafHostItem } from './CloudWafHostItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CloudWafHostItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHostResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CloudWafHostItem>): ListHostResponse {
        this['items'] = items;
        return this;
    }
}