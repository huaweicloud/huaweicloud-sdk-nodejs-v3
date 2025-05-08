

export class TextWatermark {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    private 'random_time_min'?: number;
    private 'random_time_max'?: number;
    private 'font_name'?: string;
    private 'font_size'?: number;
    private 'font_color'?: string;
    public constructor() { 
    }
    public withDx(dx: string): TextWatermark {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): TextWatermark {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): TextWatermark {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): TextWatermark {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): TextWatermark {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
        return this['timeline_duration'];
    }
    public withRandomTimeMin(randomTimeMin: number): TextWatermark {
        this['random_time_min'] = randomTimeMin;
        return this;
    }
    public set randomTimeMin(randomTimeMin: number  | undefined) {
        this['random_time_min'] = randomTimeMin;
    }
    public get randomTimeMin(): number | undefined {
        return this['random_time_min'];
    }
    public withRandomTimeMax(randomTimeMax: number): TextWatermark {
        this['random_time_max'] = randomTimeMax;
        return this;
    }
    public set randomTimeMax(randomTimeMax: number  | undefined) {
        this['random_time_max'] = randomTimeMax;
    }
    public get randomTimeMax(): number | undefined {
        return this['random_time_max'];
    }
    public withFontName(fontName: string): TextWatermark {
        this['font_name'] = fontName;
        return this;
    }
    public set fontName(fontName: string  | undefined) {
        this['font_name'] = fontName;
    }
    public get fontName(): string | undefined {
        return this['font_name'];
    }
    public withFontSize(fontSize: number): TextWatermark {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withFontColor(fontColor: string): TextWatermark {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: string  | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor(): string | undefined {
        return this['font_color'];
    }
}