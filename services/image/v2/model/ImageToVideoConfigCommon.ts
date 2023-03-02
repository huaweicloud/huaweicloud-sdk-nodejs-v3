import { ImageToVideoInference } from './ImageToVideoInference';


export class ImageToVideoConfigCommon {
    public inference: ImageToVideoInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: ImageToVideoInference): ImageToVideoConfigCommon {
        this['inference'] = inference;
        return this;
    }
}