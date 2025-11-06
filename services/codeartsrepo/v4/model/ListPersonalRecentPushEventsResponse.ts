import { PersonalPushEventDto } from './PersonalPushEventDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersonalRecentPushEventsResponse extends SdkResponse {
    public body?: Array<PersonalPushEventDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PersonalPushEventDto>): ListPersonalRecentPushEventsResponse {
        this['body'] = body;
        return this;
    }
}