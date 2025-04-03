

export class SubtitleConfig {
    public dx?: number;
    public dy?: number;
    public h?: number;
    public w?: number;
    private 'font_name'?: string;
    private 'font_size'?: number;
    private 'font_color'?: string;
    private 'stroke_color'?: string;
    private 'stroke_thickness'?: number;
    public opacity?: number;
    public constructor() { 
    }
    public withDx(dx: number): SubtitleConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): SubtitleConfig {
        this['dy'] = dy;
        return this;
    }
    public withH(h: number): SubtitleConfig {
        this['h'] = h;
        return this;
    }
    public withW(w: number): SubtitleConfig {
        this['w'] = w;
        return this;
    }
    public withFontName(fontName: string): SubtitleConfig {
        this['font_name'] = fontName;
        return this;
    }
    public set fontName(fontName: string  | undefined) {
        this['font_name'] = fontName;
    }
    public get fontName(): string | undefined {
        return this['font_name'];
    }
    public withFontSize(fontSize: number): SubtitleConfig {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withFontColor(fontColor: string): SubtitleConfig {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: string  | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor(): string | undefined {
        return this['font_color'];
    }
    public withStrokeColor(strokeColor: string): SubtitleConfig {
        this['stroke_color'] = strokeColor;
        return this;
    }
    public set strokeColor(strokeColor: string  | undefined) {
        this['stroke_color'] = strokeColor;
    }
    public get strokeColor(): string | undefined {
        return this['stroke_color'];
    }
    public withStrokeThickness(strokeThickness: number): SubtitleConfig {
        this['stroke_thickness'] = strokeThickness;
        return this;
    }
    public set strokeThickness(strokeThickness: number  | undefined) {
        this['stroke_thickness'] = strokeThickness;
    }
    public get strokeThickness(): number | undefined {
        return this['stroke_thickness'];
    }
    public withOpacity(opacity: number): SubtitleConfig {
        this['opacity'] = opacity;
        return this;
    }
}