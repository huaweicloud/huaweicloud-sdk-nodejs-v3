

export class OpenWebinarUpcomingInfo {
    public conferenceId?: string;
    public corpId?: string;
    public subject?: string;
    public description?: string;
    public startTime?: string;
    public duration?: number;
    public timeZoneId?: number;
    public scheduserId?: string;
    public deptName?: string;
    public scheduserName?: string;
    public vmrPkgName?: string;
    public chairJoinUri?: string;
    public chairPasswd?: string;
    public guestJoinUri?: string;
    public guestPasswd?: string;
    public audienceJoinUri?: string;
    public audiencePasswd?: string;
    public constructor() { 
    }
    public withConferenceId(conferenceId: string): OpenWebinarUpcomingInfo {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withCorpId(corpId: string): OpenWebinarUpcomingInfo {
        this['corpId'] = corpId;
        return this;
    }
    public withSubject(subject: string): OpenWebinarUpcomingInfo {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): OpenWebinarUpcomingInfo {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): OpenWebinarUpcomingInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): OpenWebinarUpcomingInfo {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenWebinarUpcomingInfo {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withScheduserId(scheduserId: string): OpenWebinarUpcomingInfo {
        this['scheduserId'] = scheduserId;
        return this;
    }
    public withDeptName(deptName: string): OpenWebinarUpcomingInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withScheduserName(scheduserName: string): OpenWebinarUpcomingInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): OpenWebinarUpcomingInfo {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): OpenWebinarUpcomingInfo {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withChairPasswd(chairPasswd: string): OpenWebinarUpcomingInfo {
        this['chairPasswd'] = chairPasswd;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): OpenWebinarUpcomingInfo {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): OpenWebinarUpcomingInfo {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): OpenWebinarUpcomingInfo {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): OpenWebinarUpcomingInfo {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
}