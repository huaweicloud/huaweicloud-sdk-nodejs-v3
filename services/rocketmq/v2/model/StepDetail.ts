

export class StepDetail {
    public name?: string;
    public statue?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
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
    public withStartTime(startTime: number): StepDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): StepDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}