import { DiskusageEntity } from './DiskusageEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicPartitionDiskusageResponse extends SdkResponse {
    private 'broker_list'?: Array<DiskusageEntity>;
    public constructor() { 
        super();
    }
    public withBrokerList(brokerList: Array<DiskusageEntity>): ShowKafkaTopicPartitionDiskusageResponse {
        this['broker_list'] = brokerList;
        return this;
    }
    public set brokerList(brokerList: Array<DiskusageEntity>  | undefined) {
        this['broker_list'] = brokerList;
    }
    public get brokerList(): Array<DiskusageEntity> | undefined {
        return this['broker_list'];
    }
}