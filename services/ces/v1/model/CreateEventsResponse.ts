import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventsResponse extends SdkResponse {
    public body?: Array<Event>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Event>): CreateEventsResponse {
        this['body'] = body;
        return this;
    }
}