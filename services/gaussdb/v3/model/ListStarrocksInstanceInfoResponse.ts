import { StarRocksInstanceInfoInstances } from './StarRocksInstanceInfoInstances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStarrocksInstanceInfoResponse extends SdkResponse {
    public instances?: Array<StarRocksInstanceInfoInstances>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<StarRocksInstanceInfoInstances>): ListStarrocksInstanceInfoResponse {
        this['instances'] = instances;
        return this;
    }
}