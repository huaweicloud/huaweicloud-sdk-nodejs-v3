

export class AutoscanConfigRequest {
    private 'enable_auto_scan': boolean | undefined;
    private 'schedule_at': Array<string> | undefined;
    public constructor(enableAutoScan?: any, scheduleAt?: any) { 
        this['enable_auto_scan'] = enableAutoScan;
        this['schedule_at'] = scheduleAt;
    }
    public withEnableAutoScan(enableAutoScan: boolean): AutoscanConfigRequest {
        this['enable_auto_scan'] = enableAutoScan;
        return this;
    }
    public set enableAutoScan(enableAutoScan: boolean | undefined) {
        this['enable_auto_scan'] = enableAutoScan;
    }
    public get enableAutoScan() {
        return this['enable_auto_scan'];
    }
    public withScheduleAt(scheduleAt: Array<string>): AutoscanConfigRequest {
        this['schedule_at'] = scheduleAt;
        return this;
    }
    public set scheduleAt(scheduleAt: Array<string> | undefined) {
        this['schedule_at'] = scheduleAt;
    }
    public get scheduleAt() {
        return this['schedule_at'];
    }
}