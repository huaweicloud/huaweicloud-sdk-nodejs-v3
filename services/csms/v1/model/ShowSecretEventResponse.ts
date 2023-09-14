import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretEventResponse extends SdkResponse {
    public event?: Event;
    public constructor() { 
        super();
    }
    public withEvent(event: Event): ShowSecretEventResponse {
        this['event'] = event;
        return this;
    }
}