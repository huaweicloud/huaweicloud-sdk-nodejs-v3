import { ChannelInfo } from './ChannelInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListChannelsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<ChannelInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListChannelsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListChannelsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<ChannelInfo>): ListChannelsResponse {
        this['items'] = items;
        return this;
    }
}