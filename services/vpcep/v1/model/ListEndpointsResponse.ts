import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointsResponse extends SdkResponse {
    public endpoints?: Array<EndpointResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEndpoints(endpoints: Array<EndpointResp>): ListEndpointsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withTotalCount(totalCount: number): ListEndpointsResponse {
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