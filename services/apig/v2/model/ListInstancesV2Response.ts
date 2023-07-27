import { BasePage } from './BasePage';
import { RespInstanceBase } from './RespInstanceBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public instances?: Array<RespInstanceBase>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListInstancesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInstancesV2Response {
        this['total'] = total;
        return this;
    }
    public withInstances(instances: Array<RespInstanceBase>): ListInstancesV2Response {
        this['instances'] = instances;
        return this;
    }
}