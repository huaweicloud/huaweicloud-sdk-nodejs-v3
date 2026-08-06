

export class JobAlarm {
    public alarmType?: string;
    public topicUrn?: string;
    public constructor() { 
    }
    public withAlarmType(alarmType: string): JobAlarm {
        this['alarmType'] = alarmType;
        return this;
    }
    public withTopicUrn(topicUrn: string): JobAlarm {
        this['topicUrn'] = topicUrn;
        return this;
    }
}