

export class OpenWebinarOngoingInfo {
    public onlineAttendeeCount?: number;
    public confUUID?: string;
    public deptName?: string;
    public conferenceId?: string;
    public corpId?: string;
    public subject?: string;
    public description?: string;
    public startTime?: string;
    public timeZoneId?: number;
    public scheduserId?: string;
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
    public withOnlineAttendeeCount(onlineAttendeeCount: number): OpenWebinarOngoingInfo {
        this['onlineAttendeeCount'] = onlineAttendeeCount;
        return this;
    }
    public withConfUUID(confUUID: string): OpenWebinarOngoingInfo {
        this['confUUID'] = confUUID;
        return this;
    }
    public withDeptName(deptName: string): OpenWebinarOngoingInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withConferenceId(conferenceId: string): OpenWebinarOngoingInfo {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withCorpId(corpId: string): OpenWebinarOngoingInfo {
        this['corpId'] = corpId;
        return this;
    }
    public withSubject(subject: string): OpenWebinarOngoingInfo {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): OpenWebinarOngoingInfo {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): OpenWebinarOngoingInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenWebinarOngoingInfo {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withScheduserId(scheduserId: string): OpenWebinarOngoingInfo {
        this['scheduserId'] = scheduserId;
        return this;
    }
    public withScheduserName(scheduserName: string): OpenWebinarOngoingInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): OpenWebinarOngoingInfo {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withChairJoinUri(chairJoinUri: string): OpenWebinarOngoingInfo {
        this['chairJoinUri'] = chairJoinUri;
        return this;
    }
    public withChairPasswd(chairPasswd: string): OpenWebinarOngoingInfo {
        this['chairPasswd'] = chairPasswd;
        return this;
    }
    public withGuestJoinUri(guestJoinUri: string): OpenWebinarOngoingInfo {
        this['guestJoinUri'] = guestJoinUri;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): OpenWebinarOngoingInfo {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudienceJoinUri(audienceJoinUri: string): OpenWebinarOngoingInfo {
        this['audienceJoinUri'] = audienceJoinUri;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): OpenWebinarOngoingInfo {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
}