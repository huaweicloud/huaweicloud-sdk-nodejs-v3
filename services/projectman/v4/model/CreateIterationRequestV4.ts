

export class CreateIterationRequestV4 {
    private 'begin_time'?: string;
    public description?: string;
    private 'end_time'?: string;
    public name?: string;
    public constructor(beginTime?: string, endTime?: string, name?: string) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['name'] = name;
    }
    public withBeginTime(beginTime: string): CreateIterationRequestV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withDescription(description: string): CreateIterationRequestV4 {
        this['description'] = description;
        return this;
    }
    public withEndTime(endTime: string): CreateIterationRequestV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withName(name: string): CreateIterationRequestV4 {
        this['name'] = name;
        return this;
    }
}