import { VideoObjectMaskingInference } from './VideoObjectMaskingInference';


export class VideoObjectMaskingTaskConfigCommon {
    public inference: VideoObjectMaskingInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: VideoObjectMaskingInference): VideoObjectMaskingTaskConfigCommon {
        this['inference'] = inference;
        return this;
    }
}