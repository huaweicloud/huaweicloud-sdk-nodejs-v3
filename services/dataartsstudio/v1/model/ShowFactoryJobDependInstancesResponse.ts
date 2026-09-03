import { ShowFactoryJobDependInstancesResponseBody } from './ShowFactoryJobDependInstancesResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactoryJobDependInstancesResponse extends SdkResponse {
    public body?: Array<ShowFactoryJobDependInstancesResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowFactoryJobDependInstancesResponseBody>): ShowFactoryJobDependInstancesResponse {
        this['body'] = body;
        return this;
    }
}