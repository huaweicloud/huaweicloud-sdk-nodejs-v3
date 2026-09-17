import { ChannelDTO } from './ChannelDTO';
import { PageInfoDTO } from './PageInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPushChannelsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public channels?: Array<ChannelDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPushChannelsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListPushChannelsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withChannels(channels: Array<ChannelDTO>): ListPushChannelsResponse {
        this['channels'] = channels;
        return this;
    }
}