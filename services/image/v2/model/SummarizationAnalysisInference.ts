

export class SummarizationAnalysisInference {
    private 'output_duration': number | undefined;
    private 'outcome_type'?: SummarizationAnalysisInferenceOutcomeTypeEnum | undefined;
    public constructor(outputDuration?: any) { 
        this['output_duration'] = outputDuration;
    }
    public withOutputDuration(outputDuration: number): SummarizationAnalysisInference {
        this['output_duration'] = outputDuration;
        return this;
    }
    public set outputDuration(outputDuration: number | undefined) {
        this['output_duration'] = outputDuration;
    }
    public get outputDuration() {
        return this['output_duration'];
    }
    public withOutcomeType(outcomeType: SummarizationAnalysisInferenceOutcomeTypeEnum): SummarizationAnalysisInference {
        this['outcome_type'] = outcomeType;
        return this;
    }
    public set outcomeType(outcomeType: SummarizationAnalysisInferenceOutcomeTypeEnum | undefined) {
        this['outcome_type'] = outcomeType;
    }
    public get outcomeType() {
        return this['outcome_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SummarizationAnalysisInferenceOutcomeTypeEnum {
    FRAGMENT = 'fragment',
    SUMMARY = 'summary'
}
