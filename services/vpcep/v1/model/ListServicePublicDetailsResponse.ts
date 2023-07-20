import { EndpointService } from './EndpointService';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServicePublicDetailsResponse extends SdkResponse {
    private 'endpoint_services'?: Array<EndpointService>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEndpointServices(endpointServices: Array<EndpointService>): ListServicePublicDetailsResponse {
        this['endpoint_services'] = endpointServices;
        return this;
    }
    public set endpointServices(endpointServices: Array<EndpointService>  | undefined) {
        this['endpoint_services'] = endpointServices;
    }
    public get endpointServices(): Array<EndpointService> | undefined {
        return this['endpoint_services'];
    }
    public withTotalCount(totalCount: number): ListServicePublicDetailsResponse {
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