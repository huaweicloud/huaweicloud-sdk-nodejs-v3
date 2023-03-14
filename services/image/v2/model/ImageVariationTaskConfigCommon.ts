import { ImageVariationInference } from './ImageVariationInference';


export class ImageVariationTaskConfigCommon {
    public inference: ImageVariationInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: ImageVariationInference): ImageVariationTaskConfigCommon {
        this['inference'] = inference;
        return this;
    }
}