

export class TextToImageInference {
    public prompt: string;
    public seed?: number;
    public resolution?: TextToImageInferenceResolutionEnum;
    private 'image_nums'?: number | undefined;
    public constructor(prompt?: any) { 
        this['prompt'] = prompt;
    }
    public withPrompt(prompt: string): TextToImageInference {
        this['prompt'] = prompt;
        return this;
    }
    public withSeed(seed: number): TextToImageInference {
        this['seed'] = seed;
        return this;
    }
    public withResolution(resolution: TextToImageInferenceResolutionEnum): TextToImageInference {
        this['resolution'] = resolution;
        return this;
    }
    public withImageNums(imageNums: number): TextToImageInference {
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
export enum TextToImageInferenceResolutionEnum {
    E_512768 = '512*768',
    E_768512 = '768*512',
    E_512512 = '512*512'
}
