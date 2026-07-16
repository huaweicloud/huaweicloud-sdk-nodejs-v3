import { ServicePodEventResponse } from './ServicePodEventResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentPodEventsResponse extends SdkResponse {
    public body?: Array<ServicePodEventResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ServicePodEventResponse>): ListInferDeploymentPodEventsResponse {
        this['body'] = body;
        return this;
    }
}