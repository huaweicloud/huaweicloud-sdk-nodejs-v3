import { AnalyzerConfigurationUnusedAccess } from './AnalyzerConfigurationUnusedAccess';


export class AnalyzerConfiguration {
    private 'unused_access'?: AnalyzerConfigurationUnusedAccess;
    public constructor() { 
    }
    public withUnusedAccess(unusedAccess: AnalyzerConfigurationUnusedAccess): AnalyzerConfiguration {
        this['unused_access'] = unusedAccess;
        return this;
    }
    public set unusedAccess(unusedAccess: AnalyzerConfigurationUnusedAccess  | undefined) {
        this['unused_access'] = unusedAccess;
    }
    public get unusedAccess(): AnalyzerConfigurationUnusedAccess | undefined {
        return this['unused_access'];
    }
}