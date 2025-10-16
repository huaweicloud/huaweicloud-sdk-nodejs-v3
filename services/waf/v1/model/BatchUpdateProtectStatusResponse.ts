import { CloudWafHostItem } from './CloudWafHostItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateProtectStatusResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CloudWafHostItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): BatchUpdateProtectStatusResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CloudWafHostItem>): BatchUpdateProtectStatusResponse {
        this['items'] = items;
        return this;
    }
}