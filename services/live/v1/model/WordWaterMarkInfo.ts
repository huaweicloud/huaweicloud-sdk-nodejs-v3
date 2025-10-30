import { WatermarkLocation } from './WatermarkLocation';


export class WordWaterMarkInfo {
    public format?: string;
    private 'font_color'?: string;
    private 'font_size'?: number;
    public font?: string;
    private 'time_zone'?: string;
    private 'shadow_color'?: string;
    public location?: WatermarkLocation;
    public constructor(format?: string, location?: WatermarkLocation) { 
        this['format'] = format;
        this['location'] = location;
    }
    public withFormat(format: string): WordWaterMarkInfo {
        this['format'] = format;
        return this;
    }
    public withFontColor(fontColor: string): WordWaterMarkInfo {
        this['font_color'] = fontColor;
        return this;
    }
    public set fontColor(fontColor: string  | undefined) {
        this['font_color'] = fontColor;
    }
    public get fontColor(): string | undefined {
        return this['font_color'];
    }
    public withFontSize(fontSize: number): WordWaterMarkInfo {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withFont(font: string): WordWaterMarkInfo {
        this['font'] = font;
        return this;
    }
    public withTimeZone(timeZone: string): WordWaterMarkInfo {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withShadowColor(shadowColor: string): WordWaterMarkInfo {
        this['shadow_color'] = shadowColor;
        return this;
    }
    public set shadowColor(shadowColor: string  | undefined) {
        this['shadow_color'] = shadowColor;
    }
    public get shadowColor(): string | undefined {
        return this['shadow_color'];
    }
    public withLocation(location: WatermarkLocation): WordWaterMarkInfo {
        this['location'] = location;
        return this;
    }
}