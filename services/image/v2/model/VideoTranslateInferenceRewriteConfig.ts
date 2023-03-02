import { VideoTranslateInferenceRewriteConfigBackground } from './VideoTranslateInferenceRewriteConfigBackground';
import { VideoTranslateInferenceRewriteConfigStroke } from './VideoTranslateInferenceRewriteConfigStroke';


export class VideoTranslateInferenceRewriteConfig {
    private 'font_type'?: string | undefined;
    private 'rewrite_row_interval'?: number | undefined;
    public stroke?: VideoTranslateInferenceRewriteConfigStroke;
    public background?: VideoTranslateInferenceRewriteConfigBackground;
    public constructor() { 
    }
    public withFontType(fontType: string): VideoTranslateInferenceRewriteConfig {
        this['font_type'] = fontType;
        return this;
    }
    public set fontType(fontType: string | undefined) {
        this['font_type'] = fontType;
    }
    public get fontType() {
        return this['font_type'];
    }
    public withRewriteRowInterval(rewriteRowInterval: number): VideoTranslateInferenceRewriteConfig {
        this['rewrite_row_interval'] = rewriteRowInterval;
        return this;
    }
    public set rewriteRowInterval(rewriteRowInterval: number | undefined) {
        this['rewrite_row_interval'] = rewriteRowInterval;
    }
    public get rewriteRowInterval() {
        return this['rewrite_row_interval'];
    }
    public withStroke(stroke: VideoTranslateInferenceRewriteConfigStroke): VideoTranslateInferenceRewriteConfig {
        this['stroke'] = stroke;
        return this;
    }
    public withBackground(background: VideoTranslateInferenceRewriteConfigBackground): VideoTranslateInferenceRewriteConfig {
        this['background'] = background;
        return this;
    }
}