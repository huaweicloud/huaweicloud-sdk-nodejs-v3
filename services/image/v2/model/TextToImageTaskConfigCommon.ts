import { TextToImageInference } from './TextToImageInference';


export class TextToImageTaskConfigCommon {
    public inference: TextToImageInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: TextToImageInference): TextToImageTaskConfigCommon {
        this['inference'] = inference;
        return this;
    }
}