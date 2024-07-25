

export class OrchestrationMapParamRange {
    private 'range_start'?: string;
    private 'range_end'?: string;
    public constructor() { 
    }
    public withRangeStart(rangeStart: string): OrchestrationMapParamRange {
        this['range_start'] = rangeStart;
        return this;
    }
    public set rangeStart(rangeStart: string  | undefined) {
        this['range_start'] = rangeStart;
    }
    public get rangeStart(): string | undefined {
        return this['range_start'];
    }
    public withRangeEnd(rangeEnd: string): OrchestrationMapParamRange {
        this['range_end'] = rangeEnd;
        return this;
    }
    public set rangeEnd(rangeEnd: string  | undefined) {
        this['range_end'] = rangeEnd;
    }
    public get rangeEnd(): string | undefined {
        return this['range_end'];
    }
}