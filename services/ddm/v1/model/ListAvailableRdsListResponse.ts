import { QueryAvailableRdsList } from './QueryAvailableRdsList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableRdsListResponse extends SdkResponse {
    public instances?: Array<QueryAvailableRdsList>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<QueryAvailableRdsList>): ListAvailableRdsListResponse {
        this['instances'] = instances;
        return this;
    }
    public withOffset(offset: number): ListAvailableRdsListResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAvailableRdsListResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListAvailableRdsListResponse {
        this['total'] = total;
        return this;
    }
}