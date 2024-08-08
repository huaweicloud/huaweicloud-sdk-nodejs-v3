import { QueryInstanceSimplify } from './QueryInstanceSimplify';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public count?: number;
    public marker?: string;
    public instances?: Array<QueryInstanceSimplify>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): ListInstancesResponse {
        this['marker'] = marker;
        return this;
    }
    public withInstances(instances: Array<QueryInstanceSimplify>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}