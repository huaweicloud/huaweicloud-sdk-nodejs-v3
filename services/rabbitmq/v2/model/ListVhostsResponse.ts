import { ShowVhostDetailResp } from './ShowVhostDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVhostsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public items?: Array<ShowVhostDetailResp>;
    public constructor() { 
        super();
    }
    public withSize(size: number): ListVhostsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListVhostsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ShowVhostDetailResp>): ListVhostsResponse {
        this['items'] = items;
        return this;
    }
}