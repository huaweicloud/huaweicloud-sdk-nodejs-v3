

export class SmartChatSubtitleConfig {
    public dx?: number;
    public dy?: number;
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withDx(dx: number): SmartChatSubtitleConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): SmartChatSubtitleConfig {
        this['dy'] = dy;
        return this;
    }
    public withWidth(width: number): SmartChatSubtitleConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): SmartChatSubtitleConfig {
        this['height'] = height;
        return this;
    }
}