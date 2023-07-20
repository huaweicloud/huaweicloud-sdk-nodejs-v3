import { OpenAttendeeEntity } from './OpenAttendeeEntity';
import { OpenNotifySetting } from './OpenNotifySetting';
import { YesNoEnum } from './YesNoEnum';


export class OpenEditConfReq {
    public conferenceId?: string;
    public subject?: string;
    public description?: string;
    public startTime?: string;
    public duration?: number;
    public timeZoneId?: number;
    public attendees?: Array<OpenAttendeeEntity>;
    public notifySetting?: OpenNotifySetting;
    public guestPasswd?: string;
    public audiencePasswd?: string;
    public callRestriction?: boolean;
    public scope?: number;
    public audienceScope?: number;
    public enableRecording?: YesNoEnum;
    public constructor(conferenceId?: string, subject?: string, startTime?: string, duration?: number, timeZoneId?: number) { 
        this['conferenceId'] = conferenceId;
        this['subject'] = subject;
        this['startTime'] = startTime;
        this['duration'] = duration;
        this['timeZoneId'] = timeZoneId;
    }
    public withConferenceId(conferenceId: string): OpenEditConfReq {
        this['conferenceId'] = conferenceId;
        return this;
    }
    public withSubject(subject: string): OpenEditConfReq {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): OpenEditConfReq {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): OpenEditConfReq {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): OpenEditConfReq {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenEditConfReq {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withAttendees(attendees: Array<OpenAttendeeEntity>): OpenEditConfReq {
        this['attendees'] = attendees;
        return this;
    }
    public withNotifySetting(notifySetting: OpenNotifySetting): OpenEditConfReq {
        this['notifySetting'] = notifySetting;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): OpenEditConfReq {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): OpenEditConfReq {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
    public withCallRestriction(callRestriction: boolean): OpenEditConfReq {
        this['callRestriction'] = callRestriction;
        return this;
    }
    public withScope(scope: number): OpenEditConfReq {
        this['scope'] = scope;
        return this;
    }
    public withAudienceScope(audienceScope: number): OpenEditConfReq {
        this['audienceScope'] = audienceScope;
        return this;
    }
    public withEnableRecording(enableRecording: YesNoEnum): OpenEditConfReq {
        this['enableRecording'] = enableRecording;
        return this;
    }
}