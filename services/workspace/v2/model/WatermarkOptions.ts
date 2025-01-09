

export class WatermarkOptions {
    private 'show_style'?: WatermarkOptionsShowStyleEnum | string;
    public color?: string;
    private 'font_size'?: number;
    private 'opacity_setting'?: string;
    private 'content_item_count'?: number;
    private 'display_format'?: string;
    public lean?: number;
    private 'content_customized'?: string;
    private 'content_color'?: string;
    private 'watermark_security_access'?: boolean;
    private 'user_extend_info_switch'?: boolean;
    private 'user_extend_info'?: string;
    public constructor() { 
    }
    public withShowStyle(showStyle: WatermarkOptionsShowStyleEnum | string): WatermarkOptions {
        this['show_style'] = showStyle;
        return this;
    }
    public set showStyle(showStyle: WatermarkOptionsShowStyleEnum | string  | undefined) {
        this['show_style'] = showStyle;
    }
    public get showStyle(): WatermarkOptionsShowStyleEnum | string | undefined {
        return this['show_style'];
    }
    public withColor(color: string): WatermarkOptions {
        this['color'] = color;
        return this;
    }
    public withFontSize(fontSize: number): WatermarkOptions {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: number  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): number | undefined {
        return this['font_size'];
    }
    public withOpacitySetting(opacitySetting: string): WatermarkOptions {
        this['opacity_setting'] = opacitySetting;
        return this;
    }
    public set opacitySetting(opacitySetting: string  | undefined) {
        this['opacity_setting'] = opacitySetting;
    }
    public get opacitySetting(): string | undefined {
        return this['opacity_setting'];
    }
    public withContentItemCount(contentItemCount: number): WatermarkOptions {
        this['content_item_count'] = contentItemCount;
        return this;
    }
    public set contentItemCount(contentItemCount: number  | undefined) {
        this['content_item_count'] = contentItemCount;
    }
    public get contentItemCount(): number | undefined {
        return this['content_item_count'];
    }
    public withDisplayFormat(displayFormat: string): WatermarkOptions {
        this['display_format'] = displayFormat;
        return this;
    }
    public set displayFormat(displayFormat: string  | undefined) {
        this['display_format'] = displayFormat;
    }
    public get displayFormat(): string | undefined {
        return this['display_format'];
    }
    public withLean(lean: number): WatermarkOptions {
        this['lean'] = lean;
        return this;
    }
    public withContentCustomized(contentCustomized: string): WatermarkOptions {
        this['content_customized'] = contentCustomized;
        return this;
    }
    public set contentCustomized(contentCustomized: string  | undefined) {
        this['content_customized'] = contentCustomized;
    }
    public get contentCustomized(): string | undefined {
        return this['content_customized'];
    }
    public withContentColor(contentColor: string): WatermarkOptions {
        this['content_color'] = contentColor;
        return this;
    }
    public set contentColor(contentColor: string  | undefined) {
        this['content_color'] = contentColor;
    }
    public get contentColor(): string | undefined {
        return this['content_color'];
    }
    public withWatermarkSecurityAccess(watermarkSecurityAccess: boolean): WatermarkOptions {
        this['watermark_security_access'] = watermarkSecurityAccess;
        return this;
    }
    public set watermarkSecurityAccess(watermarkSecurityAccess: boolean  | undefined) {
        this['watermark_security_access'] = watermarkSecurityAccess;
    }
    public get watermarkSecurityAccess(): boolean | undefined {
        return this['watermark_security_access'];
    }
    public withUserExtendInfoSwitch(userExtendInfoSwitch: boolean): WatermarkOptions {
        this['user_extend_info_switch'] = userExtendInfoSwitch;
        return this;
    }
    public set userExtendInfoSwitch(userExtendInfoSwitch: boolean  | undefined) {
        this['user_extend_info_switch'] = userExtendInfoSwitch;
    }
    public get userExtendInfoSwitch(): boolean | undefined {
        return this['user_extend_info_switch'];
    }
    public withUserExtendInfo(userExtendInfo: string): WatermarkOptions {
        this['user_extend_info'] = userExtendInfo;
        return this;
    }
    public set userExtendInfo(userExtendInfo: string  | undefined) {
        this['user_extend_info'] = userExtendInfo;
    }
    public get userExtendInfo(): string | undefined {
        return this['user_extend_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WatermarkOptionsShowStyleEnum {
    FIXED = 'FIXED',
    RANDOM = 'RANDOM'
}
