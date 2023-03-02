import { VideoCoverAnalysisinference } from './VideoCoverAnalysisinference';


export class VideoCoverAnalysisConfigCommon {
    public inference?: VideoCoverAnalysisinference;
    public constructor() { 
    }
    public withInference(inference: VideoCoverAnalysisinference): VideoCoverAnalysisConfigCommon {
        this['inference'] = inference;
        return this;
    }
}