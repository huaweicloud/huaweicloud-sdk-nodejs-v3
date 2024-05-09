

export class SmartTextLayerConfig {
    private 'text_type'?: SmartTextLayerConfigTextTypeEnum | string;
    private 'text_context'?: string;
    private 'font_name'?: string;
    private 'font_size'?: number;
    private 'font_color'?: string;
    private 'display_duration'?: number;
    public constructor() { 
    }
    public withTextType(textType: SmartTextLayerConfigTextTypeEnum | string): SmartTextLayerConfig {
        this['text_type'] = textType;
        return this;
    }
    public set textType(textType: SmartTextLayerConfigTextTypeEnum | string  | undefined) {
        this['text_type'] = textType;
    }
    public get textType(): SmartTextLayerConfigTextTypeEnum | string | undefined {
        return this['text_type'];
    }
    public withTextContext(textContext: string): SmartTextLayerConfig {
        this['text_context'] = textContext;
        return this;
    }
    public set textContext(textContext: string  | undefined) {
        this['text_context'] = textContext;
    }
    public get textContext(): string | undefined {
        return this['text_context'];
    }
    public withFontName(fontName: string): SmartTextLayerConfig {
        this['font_name'] = fontName;
        return this;
    }
    public set fontName(fontName: string  | undefined) {
        this['font_name'] = fontName;
    }
    public get fontName(): string | undefined {
        return this['font_name'];
    }
    public withFontSize(fontSize: number): SmartTextLayerConfig {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withFontColor(fontColor: string): SmartTextLayerConfig {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: string  | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor(): string | undefined {
        return this['font_color'];
    }
    public withDisplayDuration(displayDuration: number): SmartTextLayerConfig {
        this['display_duration'] = displayDuration;
        return this;
    }
    public set displayDuration(displayDuration: number  | undefined) {
        this['display_duration'] = displayDuration;
    }
    public get displayDuration(): number | undefined {
        return this['display_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartTextLayerConfigTextTypeEnum {
    DYNAMIC = 'DYNAMIC',
    STATIC = 'STATIC'
}
