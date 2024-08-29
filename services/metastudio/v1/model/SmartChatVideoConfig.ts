

export class SmartChatVideoConfig {
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withWidth(width: number): SmartChatVideoConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): SmartChatVideoConfig {
        this['height'] = height;
        return this;
    }
}