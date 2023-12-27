

export class SubtitleConfig {
    public dx?: number;
    public dy?: number;
    private 'font_name'?: string;
    private 'font_size'?: number;
    public h?: number;
    public w?: number;
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
    public withH(h: number): SubtitleConfig {
        this['h'] = h;
        return this;
    }
    public withW(w: number): SubtitleConfig {
        this['w'] = w;
        return this;
    }
}