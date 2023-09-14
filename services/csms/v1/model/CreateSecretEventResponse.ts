import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretEventResponse extends SdkResponse {
    public event?: Event;
    public constructor() { 
        super();
    }
    public withEvent(event: Event): CreateSecretEventResponse {
        this['event'] = event;
        return this;
    }
}