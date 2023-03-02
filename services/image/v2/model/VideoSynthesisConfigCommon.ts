import { VideoSynthesisInference } from './VideoSynthesisInference';


export class VideoSynthesisConfigCommon {
    public inference: VideoSynthesisInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: VideoSynthesisInference): VideoSynthesisConfigCommon {
        this['inference'] = inference;
        return this;
    }
}