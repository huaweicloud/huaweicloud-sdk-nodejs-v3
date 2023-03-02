

export class VideoTranslateInferenceRewriteConfigStroke {
    private 'stroke_color'?: Array<number> | undefined;
    private 'font_color'?: Array<number> | undefined;
    private 'stroke_ratio'?: number | undefined;
    public constructor() { 
    }
    public withStrokeColor(strokeColor: Array<number>): VideoTranslateInferenceRewriteConfigStroke {
        this['stroke_color'] = strokeColor;
        return this;
    }
    public set strokeColor(strokeColor: Array<number> | undefined) {
        this['stroke_color'] = strokeColor;
    }
    public get strokeColor() {
        return this['stroke_color'];
    }
    public withFontColor(fontColor: Array<number>): VideoTranslateInferenceRewriteConfigStroke {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: Array<number> | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor() {
        return this['font_color'];
    }
    public withStrokeRatio(strokeRatio: number): VideoTranslateInferenceRewriteConfigStroke {
        this['stroke_ratio'] = strokeRatio;
        return this;
    }
    public set strokeRatio(strokeRatio: number | undefined) {
        this['stroke_ratio'] = strokeRatio;
    }
    public get strokeRatio() {
        return this['stroke_ratio'];
    }
}