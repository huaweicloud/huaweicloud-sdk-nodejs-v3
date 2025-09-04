

export class PointScalingDTO {
    public ratio?: number;
    public base?: number;
    public accuracy?: number;
    public constructor(ratio?: number, base?: number) { 
        this['ratio'] = ratio;
        this['base'] = base;
    }
    public withRatio(ratio: number): PointScalingDTO {
        this['ratio'] = ratio;
        return this;
    }
    public withBase(base: number): PointScalingDTO {
        this['base'] = base;
        return this;
    }
    public withAccuracy(accuracy: number): PointScalingDTO {
        this['accuracy'] = accuracy;
        return this;
    }
}