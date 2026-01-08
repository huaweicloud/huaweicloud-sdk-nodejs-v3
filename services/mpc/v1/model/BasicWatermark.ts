

export class BasicWatermark {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    private 'random_time_min'?: string;
    private 'random_time_max'?: string;
    public constructor() { 
    }
    public withDx(dx: string): BasicWatermark {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): BasicWatermark {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): BasicWatermark {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): BasicWatermark {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): BasicWatermark {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
        return this['timeline_duration'];
    }
    public withRandomTimeMin(randomTimeMin: string): BasicWatermark {
        this['random_time_min'] = randomTimeMin;
        return this;
    }
    public set randomTimeMin(randomTimeMin: string  | undefined) {
        this['random_time_min'] = randomTimeMin;
    }
    public get randomTimeMin(): string | undefined {
        return this['random_time_min'];
    }
    public withRandomTimeMax(randomTimeMax: string): BasicWatermark {
        this['random_time_max'] = randomTimeMax;
        return this;
    }
    public set randomTimeMax(randomTimeMax: string  | undefined) {
        this['random_time_max'] = randomTimeMax;
    }
    public get randomTimeMax(): string | undefined {
        return this['random_time_max'];
    }
}