import { SummarizationAnalysisConfigCommon } from './SummarizationAnalysisConfigCommon';


export class SummarizationAnalysisConfig {
    public common: SummarizationAnalysisConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: SummarizationAnalysisConfigCommon): SummarizationAnalysisConfig {
        this['common'] = common;
        return this;
    }
}