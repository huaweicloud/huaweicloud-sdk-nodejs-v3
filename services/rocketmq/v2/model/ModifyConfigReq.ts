import { RocketMQConfigReq } from './RocketMQConfigReq';


export class ModifyConfigReq {
    private 'rocketmq_configs'?: Array<RocketMQConfigReq>;
    public constructor(rocketmqConfigs?: Array<RocketMQConfigReq>) { 
        this['rocketmq_configs'] = rocketmqConfigs;
    }
    public withRocketmqConfigs(rocketmqConfigs: Array<RocketMQConfigReq>): ModifyConfigReq {
        this['rocketmq_configs'] = rocketmqConfigs;
        return this;
    }
    public set rocketmqConfigs(rocketmqConfigs: Array<RocketMQConfigReq>  | undefined) {
        this['rocketmq_configs'] = rocketmqConfigs;
    }
    public get rocketmqConfigs(): Array<RocketMQConfigReq> | undefined {
        return this['rocketmq_configs'];
    }
}