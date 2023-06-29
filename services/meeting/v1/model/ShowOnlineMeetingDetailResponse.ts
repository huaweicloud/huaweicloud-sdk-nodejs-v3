import { ConferenceInfo } from './ConferenceInfo';
import { PageParticipant } from './PageParticipant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOnlineMeetingDetailResponse extends SdkResponse {
    public conferenceData?: ConferenceInfo;
    public data?: PageParticipant;
    public constructor() { 
        super();
    }
    public withConferenceData(conferenceData: ConferenceInfo): ShowOnlineMeetingDetailResponse {
        this['conferenceData'] = conferenceData;
        return this;
    }
    public withData(data: PageParticipant): ShowOnlineMeetingDetailResponse {
        this['data'] = data;
        return this;
    }
}