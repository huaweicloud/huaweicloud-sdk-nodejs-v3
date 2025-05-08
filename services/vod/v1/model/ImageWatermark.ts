

export class ImageWatermark {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    private 'random_time_min'?: number;
    private 'random_time_max'?: number;
    public width?: string;
    public height?: string;
    public constructor() { 
    }
    public withDx(dx: string): ImageWatermark {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): ImageWatermark {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): ImageWatermark {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): ImageWatermark {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): ImageWatermark {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
        return this['timeline_duration'];
    }
    public withRandomTimeMin(randomTimeMin: number): ImageWatermark {
        this['random_time_min'] = randomTimeMin;
        return this;
    }
    public set randomTimeMin(randomTimeMin: number  | undefined) {
        this['random_time_min'] = randomTimeMin;
    }
    public get randomTimeMin(): number | undefined {
        return this['random_time_min'];
    }
    public withRandomTimeMax(randomTimeMax: number): ImageWatermark {
        this['random_time_max'] = randomTimeMax;
        return this;
    }
    public set randomTimeMax(randomTimeMax: number  | undefined) {
        this['random_time_max'] = randomTimeMax;
    }
    public get randomTimeMax(): number | undefined {
        return this['random_time_max'];
    }
    public withWidth(width: string): ImageWatermark {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): ImageWatermark {
        this['height'] = height;
        return this;
    }
}