

export class BackgroundImageConfig {
    public dx?: number;
    public dy?: number;
    public width?: number;
    public height?: number;
    public constructor(dx?: number, dy?: number, width?: number, height?: number) { 
        this['dx'] = dx;
        this['dy'] = dy;
        this['width'] = width;
        this['height'] = height;
    }
    public withDx(dx: number): BackgroundImageConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): BackgroundImageConfig {
        this['dy'] = dy;
        return this;
    }
    public withWidth(width: number): BackgroundImageConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): BackgroundImageConfig {
        this['height'] = height;
        return this;
    }
}