

export class UpdateIterationRequestV4 {
    private 'begin_time'?: string;
    public description?: string;
    private 'end_time'?: string;
    public name?: string;
    public status?: string;
    private 'over_type'?: string;
    public constructor(beginTime?: string, endTime?: string, name?: string) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['name'] = name;
    }
    public withBeginTime(beginTime: string): UpdateIterationRequestV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withDescription(description: string): UpdateIterationRequestV4 {
        this['description'] = description;
        return this;
    }
    public withEndTime(endTime: string): UpdateIterationRequestV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withName(name: string): UpdateIterationRequestV4 {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): UpdateIterationRequestV4 {
        this['status'] = status;
        return this;
    }
    public withOverType(overType: string): UpdateIterationRequestV4 {
        this['over_type'] = overType;
        return this;
    }
    public set overType(overType: string  | undefined) {
        this['over_type'] = overType;
    }
    public get overType(): string | undefined {
        return this['over_type'];
    }
}