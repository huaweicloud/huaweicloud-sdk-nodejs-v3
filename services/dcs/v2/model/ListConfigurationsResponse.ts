import { QueryRedisConfig } from './QueryRedisConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsResponse extends SdkResponse {
    private 'config_time'?: string | undefined;
    private 'instance_id'?: string | undefined;
    private 'redis_config'?: Array<QueryRedisConfig> | undefined;
    private 'config_status'?: ListConfigurationsResponseConfigStatusEnum | undefined;
    public status?: string;
    public constructor() { 
        super();
    }
    public withConfigTime(configTime: string): ListConfigurationsResponse {
        this['config_time'] = configTime;
        return this;
    }
    public set configTime(configTime: string | undefined) {
        this['config_time'] = configTime;
    }
    public get configTime() {
        return this['config_time'];
    }
    public withInstanceId(instanceId: string): ListConfigurationsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withRedisConfig(redisConfig: Array<QueryRedisConfig>): ListConfigurationsResponse {
        this['redis_config'] = redisConfig;
        return this;
    }
    public set redisConfig(redisConfig: Array<QueryRedisConfig> | undefined) {
        this['redis_config'] = redisConfig;
    }
    public get redisConfig() {
        return this['redis_config'];
    }
    public withConfigStatus(configStatus: ListConfigurationsResponseConfigStatusEnum): ListConfigurationsResponse {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: ListConfigurationsResponseConfigStatusEnum | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus() {
        return this['config_status'];
    }
    public withStatus(status: string): ListConfigurationsResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConfigurationsResponseConfigStatusEnum {
    UPDATING = 'UPDATING',
    FAILURE = 'FAILURE',
    SUCCESS = 'SUCCESS'
}
