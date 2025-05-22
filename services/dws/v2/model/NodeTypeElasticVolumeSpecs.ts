

export class NodeTypeElasticVolumeSpecs {
    public type?: string;
    public step?: number;
    private 'min_size'?: number;
    private 'max_size'?: number;
    public constructor(type?: string, step?: number, minSize?: number, maxSize?: number) { 
        this['type'] = type;
        this['step'] = step;
        this['min_size'] = minSize;
        this['max_size'] = maxSize;
    }
    public withType(type: string): NodeTypeElasticVolumeSpecs {
        this['type'] = type;
        return this;
    }
    public withStep(step: number): NodeTypeElasticVolumeSpecs {
        this['step'] = step;
        return this;
    }
    public withMinSize(minSize: number): NodeTypeElasticVolumeSpecs {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): NodeTypeElasticVolumeSpecs {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
}