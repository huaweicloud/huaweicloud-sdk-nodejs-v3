import { VideoTranslateInference } from './VideoTranslateInference';


export class VideoTranslateConfigCommon {
    public inference: VideoTranslateInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: VideoTranslateInference): VideoTranslateConfigCommon {
        this['inference'] = inference;
        return this;
    }
}