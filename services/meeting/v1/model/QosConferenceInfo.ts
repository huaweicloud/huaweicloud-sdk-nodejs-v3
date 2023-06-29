

export class QosConferenceInfo {
    public confUUID?: string;
    public conferenceID?: string;
    public subject?: string;
    public scheduserName?: string;
    public deptName?: string;
    public alarm?: string;
    public audioAlarm?: string;
    public videoAlarm?: string;
    public screenAlarm?: string;
    public cpuAlarm?: string;
    public timeZoneID?: string;
    public startTime?: number;
    public endTime?: number;
    public duration?: number;
    public participants?: number;
    public webinar?: boolean;
    public constructor() { 
    }
    public withConfUUID(confUUID: string): QosConferenceInfo {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConferenceID(conferenceID: string): QosConferenceInfo {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withSubject(subject: string): QosConferenceInfo {
        this['subject'] = subject;
        return this;
    }
    public withScheduserName(scheduserName: string): QosConferenceInfo {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withDeptName(deptName: string): QosConferenceInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withAlarm(alarm: string): QosConferenceInfo {
        this['alarm'] = alarm;
        return this;
    }
    public withAudioAlarm(audioAlarm: string): QosConferenceInfo {
        this['audioAlarm'] = audioAlarm;
        return this;
    }
    public withVideoAlarm(videoAlarm: string): QosConferenceInfo {
        this['videoAlarm'] = videoAlarm;
        return this;
    }
    public withScreenAlarm(screenAlarm: string): QosConferenceInfo {
        this['screenAlarm'] = screenAlarm;
        return this;
    }
    public withCpuAlarm(cpuAlarm: string): QosConferenceInfo {
        this['cpuAlarm'] = cpuAlarm;
        return this;
    }
    public withTimeZoneID(timeZoneID: string): QosConferenceInfo {
        this['timeZoneID'] = timeZoneID;
        return this;
    }
    public withStartTime(startTime: number): QosConferenceInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): QosConferenceInfo {
        this['endTime'] = endTime;
        return this;
    }
    public withDuration(duration: number): QosConferenceInfo {
        this['duration'] = duration;
        return this;
    }
    public withParticipants(participants: number): QosConferenceInfo {
        this['participants'] = participants;
        return this;
    }
    public withWebinar(webinar: boolean): QosConferenceInfo {
        this['webinar'] = webinar;
        return this;
    }
}