import { ConferenceInfo } from './ConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMeetingResponse extends SdkResponse {
    public body?: Array<ConferenceInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConferenceInfo>): CreateMeetingResponse {
        this['body'] = body;
        return this;
    }
}