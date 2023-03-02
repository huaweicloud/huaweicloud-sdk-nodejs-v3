

export class VideoTranslateInferenceRewriteConfigBackground {
    private 'box_color'?: Array<number> | undefined;
    private 'background_font_color'?: Array<number> | undefined;
    public constructor() { 
    }
    public withBoxColor(boxColor: Array<number>): VideoTranslateInferenceRewriteConfigBackground {
        this['box_color'] = boxColor;
        return this;
    }
    public set boxColor(boxColor: Array<number> | undefined) {
        this['box_color'] = boxColor;
    }
    public get boxColor() {
        return this['box_color'];
    }
    public withBackgroundFontColor(backgroundFontColor: Array<number>): VideoTranslateInferenceRewriteConfigBackground {
        this['background_font_color'] = backgroundFontColor;
        return this;
    }
    public set backgroundFontColor(backgroundFontColor: Array<number> | undefined) {
        this['background_font_color'] = backgroundFontColor;
    }
    public get backgroundFontColor() {
        return this['background_font_color'];
    }
}