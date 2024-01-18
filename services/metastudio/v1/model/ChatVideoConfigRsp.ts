

export class ChatVideoConfigRsp {
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withWidth(width: number): ChatVideoConfigRsp {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ChatVideoConfigRsp {
        this['height'] = height;
        return this;
    }
}