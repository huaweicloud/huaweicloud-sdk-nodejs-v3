import { ImageTranslateInference } from './ImageTranslateInference';


export class ImageTranslateConfigCommon {
    public inference: ImageTranslateInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: ImageTranslateInference): ImageTranslateConfigCommon {
        this['inference'] = inference;
        return this;
    }
}