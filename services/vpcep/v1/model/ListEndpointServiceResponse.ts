import { ServiceList } from './ServiceList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointServiceResponse extends SdkResponse {
    private 'endpoint_services'?: Array<ServiceList> | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withEndpointServices(endpointServices: Array<ServiceList>): ListEndpointServiceResponse {
        this['endpoint_services'] = endpointServices;
        return this;
    }
    public set endpointServices(endpointServices: Array<ServiceList> | undefined) {
        this['endpoint_services'] = endpointServices;
    }
    public get endpointServices() {
        return this['endpoint_services'];
    }
    public withTotalCount(totalCount: number): ListEndpointServiceResponse {
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