import { ServiceResponse } from './ServiceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInferServicesResponse extends SdkResponse {
    private 'service_responses'?: Array<ServiceResponse>;
    public constructor() { 
        super();
    }
    public withServiceResponses(serviceResponses: Array<ServiceResponse>): BatchDeleteInferServicesResponse {
        this['service_responses'] = serviceResponses;
        return this;
    }
    public set serviceResponses(serviceResponses: Array<ServiceResponse>  | undefined) {
        this['service_responses'] = serviceResponses;
    }
    public get serviceResponses(): Array<ServiceResponse> | undefined {
        return this['service_responses'];
    }
}