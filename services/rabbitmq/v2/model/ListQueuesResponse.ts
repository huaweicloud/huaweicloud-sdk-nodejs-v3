import { QueueDetails } from './QueueDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueuesResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public items?: Array<QueueDetails>;
    public constructor() { 
        super();
    }
    public withSize(size: number): ListQueuesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListQueuesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<QueueDetails>): ListQueuesResponse {
        this['items'] = items;
        return this;
    }
}