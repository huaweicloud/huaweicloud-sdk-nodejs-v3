import { ConferenceInfo } from './ConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRecurringMeetingResponse extends SdkResponse {
    public body?: Array<ConferenceInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConferenceInfo>): CreateRecurringMeetingResponse {
        this['body'] = body;
        return this;
    }
}