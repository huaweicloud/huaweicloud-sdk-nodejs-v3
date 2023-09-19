

export class LayerSizeConfig {
    public width?: number;
    public height?: number;
    public constructor() { 
    }
    public withWidth(width: number): LayerSizeConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): LayerSizeConfig {
        this['height'] = height;
        return this;
    }
}