import { RocketMQConfigResp } from './RocketMQConfigResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketMqConfigsResponse extends SdkResponse {
    private 'rocketmq_configs'?: Array<RocketMQConfigResp>;
    public constructor() { 
        super();
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