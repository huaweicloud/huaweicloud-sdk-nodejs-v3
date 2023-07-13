

export class MaintainWindow {
    public day?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
    }
    public withDay(day: string): MaintainWindow {
        this['day'] = day;
        return this;
    }
    public withStartTime(startTime: string): MaintainWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): MaintainWindow {
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