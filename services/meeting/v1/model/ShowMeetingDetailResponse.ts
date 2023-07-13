import { ConferenceInfo } from './ConferenceInfo';
import { PageParticipant } from './PageParticipant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMeetingDetailResponse extends SdkResponse {
    public conferenceData?: ConferenceInfo;
    public data?: PageParticipant;
    public constructor() { 
        super();
    }
    public withConferenceData(conferenceData: ConferenceInfo): ShowMeetingDetailResponse {
        this['conferenceData'] = conferenceData;
        return this;
    }
    public withData(data: PageParticipant): ShowMeetingDetailResponse {
        this['data'] = data;
        return this;
    }
}