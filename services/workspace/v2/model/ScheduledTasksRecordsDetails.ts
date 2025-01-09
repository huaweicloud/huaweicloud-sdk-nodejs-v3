

export class ScheduledTasksRecordsDetails {
    public id?: string;
    private 'record_id'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'exec_status'?: string;
    private 'exec_script_id'?: string;
    private 'result_code'?: string;
    private 'fail_reason'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'time_zone'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduledTasksRecordsDetails {
        this['id'] = id;
        return this;
    }
    public withRecordId(recordId: string): ScheduledTasksRecordsDetails {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withDesktopId(desktopId: string): ScheduledTasksRecordsDetails {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ScheduledTasksRecordsDetails {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withExecStatus(execStatus: string): ScheduledTasksRecordsDetails {
        this['exec_status'] = execStatus;
        return this;
    }
    public set execStatus(execStatus: string  | undefined) {
        this['exec_status'] = execStatus;
    }
    public get execStatus(): string | undefined {
        return this['exec_status'];
    }
    public withExecScriptId(execScriptId: string): ScheduledTasksRecordsDetails {
        this['exec_script_id'] = execScriptId;
        return this;
    }
    public set execScriptId(execScriptId: string  | undefined) {
        this['exec_script_id'] = execScriptId;
    }
    public get execScriptId(): string | undefined {
        return this['exec_script_id'];
    }
    public withResultCode(resultCode: string): ScheduledTasksRecordsDetails {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withFailReason(failReason: string): ScheduledTasksRecordsDetails {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withStartTime(startTime: string): ScheduledTasksRecordsDetails {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduledTasksRecordsDetails {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTimeZone(timeZone: string): ScheduledTasksRecordsDetails {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}