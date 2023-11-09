import { ModifyInstanceConfig } from './ModifyInstanceConfig';


export class ModifyInstanceConfigsReq {
    private 'kafka_configs'?: Array<ModifyInstanceConfig>;
    public constructor() { 
    }
    public withKafkaConfigs(kafkaConfigs: Array<ModifyInstanceConfig>): ModifyInstanceConfigsReq {
        this['kafka_configs'] = kafkaConfigs;
        return this;
    }
    public set kafkaConfigs(kafkaConfigs: Array<ModifyInstanceConfig>  | undefined) {
        this['kafka_configs'] = kafkaConfigs;
    }
    public get kafkaConfigs(): Array<ModifyInstanceConfig> | undefined {
        return this['kafka_configs'];
    }
}