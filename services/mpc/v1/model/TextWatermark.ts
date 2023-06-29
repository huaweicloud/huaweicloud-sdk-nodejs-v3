import { BasicWatermark } from './BasicWatermark';


export class TextWatermark {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    private 'font_name'?: string | undefined;
    private 'font_size'?: number | undefined;
    private 'font_color'?: string | undefined;
    public base?: TextWatermarkBaseEnum;
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
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): TextWatermark {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
        return this['timeline_duration'];
    }
    public withFontName(fontName: string): TextWatermark {
        this['font_name'] = fontName;
        return this;
    }
    public set fontName(fontName: string | undefined) {
        this['font_name'] = fontName;
    }
    public get fontName() {
        return this['font_name'];
    }
    public withFontSize(fontSize: number): TextWatermark {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize() {
        return this['font_size'];
    }
    public withFontColor(fontColor: string): TextWatermark {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: string | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor() {
        return this['font_color'];
    }
    public withBase(base: TextWatermarkBaseEnum): TextWatermark {
        this['base'] = base;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TextWatermarkBaseEnum {
    INPUT = 'input',
    OUTPUT = 'output'
}
