import { UnusedAnalysisRule } from './UnusedAnalysisRule';


export class AnalyzerConfigurationUnusedAccess {
    private 'unused_access_age'?: number;
    private 'unused_analysis_rule'?: UnusedAnalysisRule;
    public constructor() { 
    }
    public withUnusedAccessAge(unusedAccessAge: number): AnalyzerConfigurationUnusedAccess {
        this['unused_access_age'] = unusedAccessAge;
        return this;
    }
    public set unusedAccessAge(unusedAccessAge: number  | undefined) {
        this['unused_access_age'] = unusedAccessAge;
    }
    public get unusedAccessAge(): number | undefined {
        return this['unused_access_age'];
    }
    public withUnusedAnalysisRule(unusedAnalysisRule: UnusedAnalysisRule): AnalyzerConfigurationUnusedAccess {
        this['unused_analysis_rule'] = unusedAnalysisRule;
        return this;
    }
    public set unusedAnalysisRule(unusedAnalysisRule: UnusedAnalysisRule  | undefined) {
        this['unused_analysis_rule'] = unusedAnalysisRule;
    }
    public get unusedAnalysisRule(): UnusedAnalysisRule | undefined {
        return this['unused_analysis_rule'];
    }
}