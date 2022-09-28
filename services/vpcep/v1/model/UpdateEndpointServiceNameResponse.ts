
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointServiceNameResponse extends SdkResponse {
    private 'endpoint_service_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEndpointServiceName(endpointServiceName: string): UpdateEndpointServiceNameResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
}