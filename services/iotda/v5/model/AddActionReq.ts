import { ChannelDetail } from './ChannelDetail';


export class AddActionReq {
    private 'rule_id'?: string;
    public channel?: string;
    private 'channel_detail'?: ChannelDetail;
    public constructor(ruleId?: string, channel?: string, channelDetail?: ChannelDetail) { 
        this['rule_id'] = ruleId;
        this['channel'] = channel;
        this['channel_detail'] = channelDetail;
    }
    public withRuleId(ruleId: string): AddActionReq {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withChannel(channel: string): AddActionReq {
        this['channel'] = channel;
        return this;
    }
    public withChannelDetail(channelDetail: ChannelDetail): AddActionReq {
        this['channel_detail'] = channelDetail;
        return this;
    }
    public set channelDetail(channelDetail: ChannelDetail  | undefined) {
        this['channel_detail'] = channelDetail;
    }
    public get channelDetail(): ChannelDetail | undefined {
        return this['channel_detail'];
    }
}