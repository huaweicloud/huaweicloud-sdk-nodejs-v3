import { ListProjectVersionsV4ResponseBodyIterations } from './ListProjectVersionsV4ResponseBodyIterations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectIterationsV4Response extends SdkResponse {
    public total?: number;
    public iterations?: Array<ListProjectVersionsV4ResponseBodyIterations>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProjectIterationsV4Response {
        this['total'] = total;
        return this;
    }
    public withIterations(iterations: Array<ListProjectVersionsV4ResponseBodyIterations>): ListProjectIterationsV4Response {
        this['iterations'] = iterations;
        return this;
    }
}