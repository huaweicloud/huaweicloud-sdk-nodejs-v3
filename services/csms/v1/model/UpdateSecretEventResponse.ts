import { Event } from './Event';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecretEventResponse extends SdkResponse {
    public event?: Event;
    public constructor() { 
        super();
    }
    public withEvent(event: Event): UpdateSecretEventResponse {
        this['event'] = event;
        return this;
    }
}