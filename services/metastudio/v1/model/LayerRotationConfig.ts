

export class LayerRotationConfig {
    public angle?: number;
    public constructor() { 
    }
    public withAngle(angle: number): LayerRotationConfig {
        this['angle'] = angle;
        return this;
    }
}