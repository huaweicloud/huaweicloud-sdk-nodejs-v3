import { MeetingStatus } from './MeetingStatus';
import { YesNoEnum } from './YesNoEnum';


export class OpenWebinarBaseInfo {
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
    public constructor() { 
    }
    public withConferenceId(conferenceId: string): OpenWebinarBaseInfo {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withCorpId(corpId: string): OpenWebinarBaseInfo {
        this['corpId'] = corpId;
        return this;
    }
    public withSubject(subject: string): OpenWebinarBaseInfo {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): OpenWebinarBaseInfo {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): OpenWebinarBaseInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): OpenWebinarBaseInfo {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenWebinarBaseInfo {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withState(state: MeetingStatus): OpenWebinarBaseInfo {
        this['state'] = state;
        return this;
    }
    public withScheduserId(scheduserId: string): OpenWebinarBaseInfo {
        this['scheduserId'] = scheduserId;
        return this;
    }
    public withDeptName(deptName: string): OpenWebinarBaseInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withScheduserName(scheduserName: string): OpenWebinarBaseInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): OpenWebinarBaseInfo {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withCallRestriction(callRestriction: boolean): OpenWebinarBaseInfo {
        this['callRestriction'] = callRestriction;
        return this;
    }
    public withScope(scope: number): OpenWebinarBaseInfo {
        this['scope'] = scope;
        return this;
    }
    public withAudienceScope(audienceScope: number): OpenWebinarBaseInfo {
        this['audienceScope'] = audienceScope;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): OpenWebinarBaseInfo {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withChairPasswd(chairPasswd: string): OpenWebinarBaseInfo {
        this['chairPasswd'] = chairPasswd;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): OpenWebinarBaseInfo {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): OpenWebinarBaseInfo {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): OpenWebinarBaseInfo {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): OpenWebinarBaseInfo {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
    public withEnableRecording(enableRecording: YesNoEnum): OpenWebinarBaseInfo {
        this['enableRecording'] = enableRecording;
        return this;
    }
}