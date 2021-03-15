import { ChannelDetail } from './ChannelDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRuleActionResponse extends SdkResponse {
    private 'action_id'?: string | undefined;
    private 'rule_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    public channel?: string;
    private 'channel_detail'?: ChannelDetail | undefined;
    public batch?: boolean;
    public constructor() { 
        super();
    }
    public withActionId(actionId: string): ShowRuleActionResponse {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
    public withRuleId(ruleId: string): ShowRuleActionResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withAppId(appId: string): ShowRuleActionResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withChannel(channel: string): ShowRuleActionResponse {
        this['channel'] = channel;
        return this;
    }
    public withChannelDetail(channelDetail: ChannelDetail): ShowRuleActionResponse {
        this['channel_detail'] = channelDetail;
        return this;
    }
    public set channelDetail(channelDetail: ChannelDetail | undefined) {
        this['channel_detail'] = channelDetail;
    }
    public get channelDetail() {
        return this['channel_detail'];
    }
    public withBatch(batch: boolean): ShowRuleActionResponse {
        this['batch'] = batch;
        return this;
    }
}