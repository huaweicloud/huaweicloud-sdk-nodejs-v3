import { VideoTagginginference } from './VideoTagginginference';


export class VideoTaggingTaskConfigCommon {
    public inference: VideoTagginginference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: VideoTagginginference): VideoTaggingTaskConfigCommon {
        this['inference'] = inference;
        return this;
    }
}