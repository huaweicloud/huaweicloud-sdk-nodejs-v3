import { MeetingStatus } from './MeetingStatus';
import { OpenNotifySetting } from './OpenNotifySetting';
import { OpenWebinarBaseInfo } from './OpenWebinarBaseInfo';
import { YesNoEnum } from './YesNoEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWebinarResponse extends SdkResponse {
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
    public notifySetting?: OpenNotifySetting;
    public attendees?: Array<string>;
    public constructor() { 
        super();
    }
    public withConferenceId(conferenceId: string): ShowWebinarResponse {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withCorpId(corpId: string): ShowWebinarResponse {
        this['corpId'] = corpId;
        return this;
    }
    public withSubject(subject: string): ShowWebinarResponse {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): ShowWebinarResponse {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): ShowWebinarResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): ShowWebinarResponse {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): ShowWebinarResponse {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withState(state: MeetingStatus): ShowWebinarResponse {
        this['state'] = state;
        return this;
    }
    public withScheduserId(scheduserId: string): ShowWebinarResponse {
        this['scheduserId'] = scheduserId;
        return this;
    }
    public withDeptName(deptName: string): ShowWebinarResponse {
        this['deptName'] = deptName;
        return this;
    }
    public withScheduserName(scheduserName: string): ShowWebinarResponse {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): ShowWebinarResponse {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withCallRestriction(callRestriction: boolean): ShowWebinarResponse {
        this['callRestriction'] = callRestriction;
        return this;
    }
    public withScope(scope: number): ShowWebinarResponse {
        this['scope'] = scope;
        return this;
    }
    public withAudienceScope(audienceScope: number): ShowWebinarResponse {
        this['audienceScope'] = audienceScope;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): ShowWebinarResponse {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withChairPasswd(chairPasswd: string): ShowWebinarResponse {
        this['chairPasswd'] = chairPasswd;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): ShowWebinarResponse {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): ShowWebinarResponse {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): ShowWebinarResponse {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): ShowWebinarResponse {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
    public withEnableRecording(enableRecording: YesNoEnum): ShowWebinarResponse {
        this['enableRecording'] = enableRecording;
        return this;
    }
    public withNotifySetting(notifySetting: OpenNotifySetting): ShowWebinarResponse {
        this['notifySetting'] = notifySetting;
        return this;
    }
    public withAttendees(attendees: Array<string>): ShowWebinarResponse {
        this['attendees'] = attendees;
        return this;
    }
}