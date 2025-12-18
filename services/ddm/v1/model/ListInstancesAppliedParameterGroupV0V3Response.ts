import { ApplicableInstance } from './ApplicableInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesAppliedParameterGroupV0V3Response extends SdkResponse {
    public entities?: Array<ApplicableInstance>;
    private 'instance_count_limit'?: number;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<ApplicableInstance>): ListInstancesAppliedParameterGroupV0V3Response {
        this['entities'] = entities;
        return this;
    }
    public withInstanceCountLimit(instanceCountLimit: number): ListInstancesAppliedParameterGroupV0V3Response {
        this['instance_count_limit'] = instanceCountLimit;
        return this;
    }
    public set instanceCountLimit(instanceCountLimit: number  | undefined) {
        this['instance_count_limit'] = instanceCountLimit;
    }
    public get instanceCountLimit(): number | undefined {
        return this['instance_count_limit'];
    }
}