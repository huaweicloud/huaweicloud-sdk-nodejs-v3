

export class ImageVariationInference {
    public seed?: number;
    public resolution?: ImageVariationInferenceResolutionEnum;
    private 'image_nums'?: number | undefined;
    public constructor() { 
    }
    public withSeed(seed: number): ImageVariationInference {
        this['seed'] = seed;
        return this;
    }
    public withResolution(resolution: ImageVariationInferenceResolutionEnum): ImageVariationInference {
        this['resolution'] = resolution;
        return this;
    }
    public withImageNums(imageNums: number): ImageVariationInference {
        this['image_nums'] = imageNums;
        return this;
    }
    public set imageNums(imageNums: number | undefined) {
        this['image_nums'] = imageNums;
    }
    public get imageNums() {
        return this['image_nums'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageVariationInferenceResolutionEnum {
    E_512768 = '512*768',
    E_768512 = '768*512',
    E_512512 = '512*512'
}
