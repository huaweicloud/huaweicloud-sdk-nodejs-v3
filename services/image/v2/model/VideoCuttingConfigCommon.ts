import { VideoCuttingInference } from './VideoCuttingInference';


export class VideoCuttingConfigCommon {
    public inference: VideoCuttingInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: VideoCuttingInference): VideoCuttingConfigCommon {
        this['inference'] = inference;
        return this;
    }
}