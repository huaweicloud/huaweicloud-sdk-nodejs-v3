

export class MaintenanceWindow {
    public day: string;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    public constructor(day?: any, startTime?: any, endTime?: any) { 
        this['day'] = day;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withDay(day: string): MaintenanceWindow {
        this['day'] = day;
        return this;
    }
    public withStartTime(startTime: string): MaintenanceWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): MaintenanceWindow {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}