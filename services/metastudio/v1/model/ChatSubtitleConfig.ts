

export class ChatSubtitleConfig {
    public dx?: number;
    public dy?: number;
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withDx(dx: number): ChatSubtitleConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): ChatSubtitleConfig {
        this['dy'] = dy;
        return this;
    }
    public withWidth(width: number): ChatSubtitleConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ChatSubtitleConfig {
        this['height'] = height;
        return this;
    }
}