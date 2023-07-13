import { MeetingStatus } from './MeetingStatus';
import { OpenWebinarBaseInfo } from './OpenWebinarBaseInfo';
import { YesNoEnum } from './YesNoEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWebinarResponse extends SdkResponse {
    public conferenceId?: string;
    public corpId?: string;
    public subject?: string;
    public description?: string;
    public startTime?: string;
    public duration?: number;
    public timeZoneId?: number;
    public state?: MeetingStatus;
    public scheduserId?: string;
    public deptName?: string;
    public scheduserName?: string;
    public vmrPkgName?: string;
    public callRestriction?: boolean;
    public scope?: number;
    public audienceScope?: number;
    public chairJoinUri?: string;
    public chairPasswd?: string;
    public guestJoinUri?: string;
    public guestPasswd?: string;
    public audienceJoinUri?: string;
    public audiencePasswd?: string;
    public enableRecording?: YesNoEnum;
    public attendees?: Array<string>;
    public constructor() { 
        super();
    }
    public withConferenceId(conferenceId: string): CreateWebinarResponse {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withCorpId(corpId: string): CreateWebinarResponse {
        this['corpId'] = corpId;
        return this;
    }
    public withSubject(subject: string): CreateWebinarResponse {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): CreateWebinarResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): CreateWebinarResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): CreateWebinarResponse {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): CreateWebinarResponse {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withState(state: MeetingStatus): CreateWebinarResponse {
        this['state'] = state;
        return this;
    }
    public withScheduserId(scheduserId: string): CreateWebinarResponse {
        this['scheduserId'] = scheduserId;
        return this;
    }
    public withDeptName(deptName: string): CreateWebinarResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withScheduserName(scheduserName: string): CreateWebinarResponse {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): CreateWebinarResponse {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withCallRestriction(callRestriction: boolean): CreateWebinarResponse {
        this['callRestriction'] = callRestriction;
        return this;
    }
    public withScope(scope: number): CreateWebinarResponse {
        this['scope'] = scope;
        return this;
    }
    public withAudienceScope(audienceScope: number): CreateWebinarResponse {
        this['audienceScope'] = audienceScope;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): CreateWebinarResponse {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withChairPasswd(chairPasswd: string): CreateWebinarResponse {
        this['chairPasswd'] = chairPasswd;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): CreateWebinarResponse {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): CreateWebinarResponse {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): CreateWebinarResponse {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): CreateWebinarResponse {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
    public withEnableRecording(enableRecording: YesNoEnum): CreateWebinarResponse {
        this['enableRecording'] = enableRecording;
        return this;
    }
    public withAttendees(attendees: Array<string>): CreateWebinarResponse {
        this['attendees'] = attendees;
        return this;
    }
}