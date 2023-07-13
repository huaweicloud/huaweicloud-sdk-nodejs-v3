

export class OpenWebinarHistoryInfo {
    public conferenceId?: string;
    public confUUID?: string;
    public subject?: string;
    public scheduserName?: string;
    public moderator?: string;
    public deptName?: string;
    public timeZoneId?: number;
    public startTime?: string;
    public duration?: number;
    public actualStartTime?: string;
    public endTime?: string;
    public actualDuration?: number;
    public attendeeCount?: number;
    public chairCount?: number;
    public guestCount?: number;
    public audienceCount?: number;
    public vmrId?: string;
    public vmrPkgAudienceParties?: number;
    public vmrPkgName?: string;
    public constructor() { 
    }
    public withConferenceId(conferenceId: string): OpenWebinarHistoryInfo {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withConfUUID(confUUID: string): OpenWebinarHistoryInfo {
        this['confUUID'] = confUUID;
        return this;
    }
    public withSubject(subject: string): OpenWebinarHistoryInfo {
        this['subject'] = subject;
        return this;
    }
    public withScheduserName(scheduserName: string): OpenWebinarHistoryInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withModerator(moderator: string): OpenWebinarHistoryInfo {
        this['moderator'] = moderator;
        return this;
    }
    public withDeptName(deptName: string): OpenWebinarHistoryInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenWebinarHistoryInfo {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withStartTime(startTime: string): OpenWebinarHistoryInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): OpenWebinarHistoryInfo {
        this['duration'] = duration;
        return this;
    }
    public withActualStartTime(actualStartTime: string): OpenWebinarHistoryInfo {
        this['actualStartTime'] = actualStartTime;
        return this;
    }
    public withEndTime(endTime: string): OpenWebinarHistoryInfo {
        this['endTime'] = endTime;
        return this;
    }
    public withActualDuration(actualDuration: number): OpenWebinarHistoryInfo {
        this['actualDuration'] = actualDuration;
        return this;
    }
    public withAttendeeCount(attendeeCount: number): OpenWebinarHistoryInfo {
        this['attendeeCount'] = attendeeCount;
        return this;
    }
    public withChairCount(chairCount: number): OpenWebinarHistoryInfo {
        this['chairCount'] = chairCount;
        return this;
    }
    public withGuestCount(guestCount: number): OpenWebinarHistoryInfo {
        this['guestCount'] = guestCount;
        return this;
    }
    public withAudienceCount(audienceCount: number): OpenWebinarHistoryInfo {
        this['audienceCount'] = audienceCount;
        return this;
    }
    public withVmrId(vmrId: string): OpenWebinarHistoryInfo {
        this['vmrId'] = vmrId;
        return this;
    }
    public withVmrPkgAudienceParties(vmrPkgAudienceParties: number): OpenWebinarHistoryInfo {
        this['vmrPkgAudienceParties'] = vmrPkgAudienceParties;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): OpenWebinarHistoryInfo {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
}