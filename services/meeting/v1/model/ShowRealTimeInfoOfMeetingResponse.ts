import { RealTimeAttendee } from './RealTimeAttendee';
import { RealTimeConfInfo } from './RealTimeConfInfo';
import { RealTimeParticipant } from './RealTimeParticipant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRealTimeInfoOfMeetingResponse extends SdkResponse {
    public attendees?: Array<RealTimeAttendee>;
    public participants?: Array<RealTimeParticipant>;
    public confInfo?: RealTimeConfInfo;
    public constructor() { 
        super();
    }
    public withAttendees(attendees: Array<RealTimeAttendee>): ShowRealTimeInfoOfMeetingResponse {
        this['attendees'] = attendees;
        return this;
    }
    public withParticipants(participants: Array<RealTimeParticipant>): ShowRealTimeInfoOfMeetingResponse {
        this['participants'] = participants;
        return this;
    }
    public withConfInfo(confInfo: RealTimeConfInfo): ShowRealTimeInfoOfMeetingResponse {
        this['confInfo'] = confInfo;
        return this;
    }
}