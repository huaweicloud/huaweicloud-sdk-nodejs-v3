import { SummarizationAnalysisInference } from './SummarizationAnalysisInference';


export class SummarizationAnalysisConfigCommon {
    public inference: SummarizationAnalysisInference;
    public constructor(inference?: any) { 
        this['inference'] = inference;
    }
    public withInference(inference: SummarizationAnalysisInference): SummarizationAnalysisConfigCommon {
        this['inference'] = inference;
        return this;
    }
}