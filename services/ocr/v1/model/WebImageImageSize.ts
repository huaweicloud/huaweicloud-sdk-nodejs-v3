

export class WebImageImageSize {
    public height?: number;
    public width?: number;
    public constructor() { 
    }
    public withHeight(height: number): WebImageImageSize {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): WebImageImageSize {
        this['width'] = width;
        return this;
    }
}