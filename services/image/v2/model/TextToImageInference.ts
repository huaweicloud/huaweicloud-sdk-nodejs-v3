

export class TextToImageInference {
    public prompt: string;
    public seed?: number;
    public resolution?: string;
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
    public withResolution(resolution: string): TextToImageInference {
        this['resolution'] = resolution;
        return this;
    }
}