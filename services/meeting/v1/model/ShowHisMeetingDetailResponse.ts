import { ConferenceInfo } from './ConferenceInfo';
import { PageParticipant } from './PageParticipant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHisMeetingDetailResponse extends SdkResponse {
    public conferenceData?: ConferenceInfo;
    public data?: PageParticipant;
    public constructor() { 
        super();
    }
    public withConferenceData(conferenceData: ConferenceInfo): ShowHisMeetingDetailResponse {
        this['conferenceData'] = conferenceData;
        return this;
    }
    public withData(data: PageParticipant): ShowHisMeetingDetailResponse {
        this['data'] = data;
        return this;
    }
}