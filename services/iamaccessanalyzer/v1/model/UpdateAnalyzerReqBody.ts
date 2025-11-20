import { AnalyzerConfiguration } from './AnalyzerConfiguration';


export class UpdateAnalyzerReqBody {
    public configuration?: AnalyzerConfiguration;
    public constructor() { 
    }
    public withConfiguration(configuration: AnalyzerConfiguration): UpdateAnalyzerReqBody {
        this['configuration'] = configuration;
        return this;
    }
}