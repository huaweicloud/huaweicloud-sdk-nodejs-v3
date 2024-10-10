

export class CleanAlarmsRequest {
    private 'X-Language'?: string;
    private 'job_id'?: string;
    private 'alarm_id'?: string;
    public constructor(jobId?: string, alarmId?: string) { 
        this['job_id'] = jobId;
        this['alarm_id'] = alarmId;
    }
    public withXLanguage(xLanguage: string): CleanAlarmsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): CleanAlarmsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAlarmId(alarmId: string): CleanAlarmsRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
}