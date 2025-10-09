import { ApplicableInstanceInfo } from './ApplicableInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesConfigurationsResponse extends SdkResponse {
    public entities?: Array<ApplicableInstanceInfo>;
    private 'instance_count_limit'?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<ApplicableInstanceInfo>): ListInstancesConfigurationsResponse {
        this['entities'] = entities;
        return this;
    }
    public withInstanceCountLimit(instanceCountLimit: number): ListInstancesConfigurationsResponse {
        this['instance_count_limit'] = instanceCountLimit;
        return this;
    }
    public set instanceCountLimit(instanceCountLimit: number  | undefined) {
        this['instance_count_limit'] = instanceCountLimit;
    }
    public get instanceCountLimit(): number | undefined {
        return this['instance_count_limit'];
    }
    public withTotalCount(totalCount: number): ListInstancesConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}