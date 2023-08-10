import { CreateEventsResponseBody } from './CreateEventsResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventsResponse extends SdkResponse {
    public body?: Array<CreateEventsResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CreateEventsResponseBody>): CreateEventsResponse {
        this['body'] = body;
        return this;
    }
}