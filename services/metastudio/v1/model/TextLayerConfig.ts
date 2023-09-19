

export class TextLayerConfig {
    private 'text_context'?: string;
    private 'font_name'?: string;
    private 'font_size'?: number;
    private 'font_color'?: string;
    public constructor() { 
    }
    public withTextContext(textContext: string): TextLayerConfig {
        this['text_context'] = textContext;
        return this;
    }
    public set textContext(textContext: string  | undefined) {
        this['text_context'] = textContext;
    }
    public get textContext(): string | undefined {
        return this['text_context'];
    }
    public withFontName(fontName: string): TextLayerConfig {
        this['font_name'] = fontName;
        return this;
    }
    public set fontName(fontName: string  | undefined) {
        this['font_name'] = fontName;
    }
    public get fontName(): string | undefined {
        return this['font_name'];
    }
    public withFontSize(fontSize: number): TextLayerConfig {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withFontColor(fontColor: string): TextLayerConfig {
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