import { ChannelDetail } from './ChannelDetail';


export class UpdateActionReq {
    public channel?: string;
    private 'channel_detail'?: ChannelDetail | undefined;
    public constructor() { 
    }
    public withChannel(channel: string): UpdateActionReq {
        this['channel'] = channel;
        return this;
    }
    public withChannelDetail(channelDetail: ChannelDetail): UpdateActionReq {
        this['channel_detail'] = channelDetail;
        return this;
    }
    public set channelDetail(channelDetail: ChannelDetail | undefined) {
        this['channel_detail'] = channelDetail;
    }
    public get channelDetail() {
        return this['channel_detail'];
    }
}