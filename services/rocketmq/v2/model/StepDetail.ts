

export class StepDetail {
    public name?: string;
    public statue?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withName(name: string): StepDetail {
        this['name'] = name;
        return this;
    }
    public withStatue(statue: string): StepDetail {
        this['statue'] = statue;
        return this;
    }
    public withStartTime(startTime: string): StepDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): StepDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}