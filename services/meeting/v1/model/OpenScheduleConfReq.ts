import { OpenAttendeeEntity } from './OpenAttendeeEntity';
import { OpenNotifySetting } from './OpenNotifySetting';
import { YesNoEnum } from './YesNoEnum';


export class OpenScheduleConfReq {
    public subject?: string;
    public description?: string;
    public startTime?: string;
    public duration?: number;
    public timeZoneId?: number;
    public attendees?: Array<OpenAttendeeEntity>;
    public notifySetting?: OpenNotifySetting;
    public vmrID?: string;
    public guestPasswd?: string;
    public audiencePasswd?: string;
    public callRestriction?: boolean;
    public scope?: number;
    public audienceScope?: number;
    public enableRecording?: YesNoEnum;
    public liveAddress?: string;
    public auxAddress?: string;
    public liveUrl?: string;
    public constructor(subject?: string, startTime?: string, duration?: number, timeZoneId?: number, vmrID?: string) { 
        this['subject'] = subject;
        this['startTime'] = startTime;
        this['duration'] = duration;
        this['timeZoneId'] = timeZoneId;
        this['vmrID'] = vmrID;
    }
    public withSubject(subject: string): OpenScheduleConfReq {
        this['subject'] = subject;
        return this;
    }
    public withDescription(description: string): OpenScheduleConfReq {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): OpenScheduleConfReq {
        this['startTime'] = startTime;
        return this;
    }
    public withDuration(duration: number): OpenScheduleConfReq {
        this['duration'] = duration;
        return this;
    }
    public withTimeZoneId(timeZoneId: number): OpenScheduleConfReq {
        this['timeZoneId'] = timeZoneId;
        return this;
    }
    public withAttendees(attendees: Array<OpenAttendeeEntity>): OpenScheduleConfReq {
        this['attendees'] = attendees;
        return this;
    }
    public withNotifySetting(notifySetting: OpenNotifySetting): OpenScheduleConfReq {
        this['notifySetting'] = notifySetting;
        return this;
    }
    public withVmrID(vmrID: string): OpenScheduleConfReq {
        this['vmrID'] = vmrID;
        return this;
    }
    public withGuestPasswd(guestPasswd: string): OpenScheduleConfReq {
        this['guestPasswd'] = guestPasswd;
        return this;
    }
    public withAudiencePasswd(audiencePasswd: string): OpenScheduleConfReq {
        this['audiencePasswd'] = audiencePasswd;
        return this;
    }
    public withCallRestriction(callRestriction: boolean): OpenScheduleConfReq {
        this['callRestriction'] = callRestriction;
        return this;
    }
    public withScope(scope: number): OpenScheduleConfReq {
        this['scope'] = scope;
        return this;
    }
    public withAudienceScope(audienceScope: number): OpenScheduleConfReq {
        this['audienceScope'] = audienceScope;
        return this;
    }
    public withEnableRecording(enableRecording: YesNoEnum): OpenScheduleConfReq {
        this['enableRecording'] = enableRecording;
        return this;
    }
    public withLiveAddress(liveAddress: string): OpenScheduleConfReq {
        this['liveAddress'] = liveAddress;
        return this;
    }
    public withAuxAddress(auxAddress: string): OpenScheduleConfReq {
        this['auxAddress'] = auxAddress;
        return this;
    }
    public withLiveUrl(liveUrl: string): OpenScheduleConfReq {
        this['liveUrl'] = liveUrl;
        return this;
    }
}