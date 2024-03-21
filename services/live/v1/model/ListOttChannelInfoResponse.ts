import { CreateOttChannelInfoReq } from './CreateOttChannelInfoReq';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOttChannelInfoResponse extends SdkResponse {
    public total?: number;
    public channels?: Array<CreateOttChannelInfoReq>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListOttChannelInfoResponse {
        this['total'] = total;
        return this;
    }
    public withChannels(channels: Array<CreateOttChannelInfoReq>): ListOttChannelInfoResponse {
        this['channels'] = channels;
        return this;
    }
}