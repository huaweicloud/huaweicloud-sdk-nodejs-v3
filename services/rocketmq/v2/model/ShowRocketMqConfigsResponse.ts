import { RocketMQConfigResp } from './RocketMQConfigResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketMqConfigsResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    private 'rocketmq_configs'?: Array<RocketMQConfigResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowRocketMqConfigsResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowRocketMqConfigsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowRocketMqConfigsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withRocketmqConfigs(rocketmqConfigs: Array<RocketMQConfigResp>): ShowRocketMqConfigsResponse {
        this['rocketmq_configs'] = rocketmqConfigs;
        return this;
    }
    public set rocketmqConfigs(rocketmqConfigs: Array<RocketMQConfigResp>  | undefined) {
        this['rocketmq_configs'] = rocketmqConfigs;
    }
    public get rocketmqConfigs(): Array<RocketMQConfigResp> | undefined {
        return this['rocketmq_configs'];
    }
}