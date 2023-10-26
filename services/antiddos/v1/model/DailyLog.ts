

export class DailyLog {
    private 'start_time'?: number;
    private 'end_time'?: number;
    public status?: number;
    private 'trigger_bps'?: number;
    private 'trigger_pps'?: number;
    private 'trigger_http_pps'?: number;
    public constructor(startTime?: number, endTime?: number, status?: number, triggerBps?: number, triggerPps?: number, triggerHttpPps?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['status'] = status;
        this['trigger_bps'] = triggerBps;
        this['trigger_pps'] = triggerPps;
        this['trigger_http_pps'] = triggerHttpPps;
    }
    public withStartTime(startTime: number): DailyLog {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): DailyLog {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatus(status: number): DailyLog {
        this['status'] = status;
        return this;
    }
    public withTriggerBps(triggerBps: number): DailyLog {
        this['trigger_bps'] = triggerBps;
        return this;
    }
    public set triggerBps(triggerBps: number  | undefined) {
        this['trigger_bps'] = triggerBps;
    }
    public get triggerBps(): number | undefined {
        return this['trigger_bps'];
    }
    public withTriggerPps(triggerPps: number): DailyLog {
        this['trigger_pps'] = triggerPps;
        return this;
    }
    public set triggerPps(triggerPps: number  | undefined) {
        this['trigger_pps'] = triggerPps;
    }
    public get triggerPps(): number | undefined {
        return this['trigger_pps'];
    }
    public withTriggerHttpPps(triggerHttpPps: number): DailyLog {
        this['trigger_http_pps'] = triggerHttpPps;
        return this;
    }
    public set triggerHttpPps(triggerHttpPps: number  | undefined) {
        this['trigger_http_pps'] = triggerHttpPps;
    }
    public get triggerHttpPps(): number | undefined {
        return this['trigger_http_pps'];
    }
}