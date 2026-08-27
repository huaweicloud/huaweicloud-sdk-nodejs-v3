import { ImChannelItem } from './ImChannelItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImChannelsResponse extends SdkResponse {
    private 'im_channels'?: Array<ImChannelItem>;
    public constructor() { 
        super();
    }
    public withImChannels(imChannels: Array<ImChannelItem>): ListImChannelsResponse {
        this['im_channels'] = imChannels;
        return this;
    }
    public set imChannels(imChannels: Array<ImChannelItem>  | undefined) {
        this['im_channels'] = imChannels;
    }
    public get imChannels(): Array<ImChannelItem> | undefined {
        return this['im_channels'];
    }
}