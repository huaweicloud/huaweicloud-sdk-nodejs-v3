import { InstanceConfig } from './InstanceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigsResponse extends SdkResponse {
    private 'kafka_configs'?: Array<InstanceConfig>;
    public constructor() { 
        super();
    }
    public withKafkaConfigs(kafkaConfigs: Array<InstanceConfig>): ShowInstanceConfigsResponse {
        this['kafka_configs'] = kafkaConfigs;
        return this;
    }
    public set kafkaConfigs(kafkaConfigs: Array<InstanceConfig>  | undefined) {
        this['kafka_configs'] = kafkaConfigs;
    }
    public get kafkaConfigs(): Array<InstanceConfig> | undefined {
        return this['kafka_configs'];
    }
}