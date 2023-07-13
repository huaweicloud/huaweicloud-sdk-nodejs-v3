import { EndpointService } from './EndpointService';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServicePublicDetailsResponse extends SdkResponse {
    private 'endpoint_services'?: Array<EndpointService> | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withEndpointServices(endpointServices: Array<EndpointService>): ListServicePublicDetailsResponse {
        this['endpoint_services'] = endpointServices;
        return this;
    }
    public set endpointServices(endpointServices: Array<EndpointService> | undefined) {
        this['endpoint_services'] = endpointServices;
    }
    public get endpointServices() {
        return this['endpoint_services'];
    }
    public withTotalCount(totalCount: number): ListServicePublicDetailsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}