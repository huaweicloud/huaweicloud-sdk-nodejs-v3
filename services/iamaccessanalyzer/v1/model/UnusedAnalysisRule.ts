import { UnusedAnalysisRuleCriteria } from './UnusedAnalysisRuleCriteria';


export class UnusedAnalysisRule {
    public exclusions?: Array<UnusedAnalysisRuleCriteria>;
    public constructor() { 
    }
    public withExclusions(exclusions: Array<UnusedAnalysisRuleCriteria>): UnusedAnalysisRule {
        this['exclusions'] = exclusions;
        return this;
    }
}