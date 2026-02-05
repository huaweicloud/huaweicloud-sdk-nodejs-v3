import { ApplicableInstance } from './ApplicableInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesConfigurationsResponse extends SdkResponse {
    public entities?: Array<ApplicableInstance>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<ApplicableInstance>): ListInstancesConfigurationsResponse {
        this['entities'] = entities;
        return this;
    }
    public withTotal(total: number): ListInstancesConfigurationsResponse {
        this['total'] = total;
        return this;
    }
}