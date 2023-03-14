

export class ImageVariationInference {
    public seed?: number;
    public resolution?: string;
    public constructor() { 
    }
    public withSeed(seed: number): ImageVariationInference {
        this['seed'] = seed;
        return this;
    }
    public withResolution(resolution: string): ImageVariationInference {
        this['resolution'] = resolution;
        return this;
    }
}