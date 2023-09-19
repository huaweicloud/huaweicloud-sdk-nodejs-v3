

export class HumanSize2D {
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withWidth(width: number): HumanSize2D {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): HumanSize2D {
        this['height'] = height;
        return this;
    }
}