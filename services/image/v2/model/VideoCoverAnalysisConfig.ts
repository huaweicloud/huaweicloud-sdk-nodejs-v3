import { VideoCoverAnalysisConfigCommon } from './VideoCoverAnalysisConfigCommon';


export class VideoCoverAnalysisConfig {
    public common?: VideoCoverAnalysisConfigCommon;
    public constructor() { 
    }
    public withCommon(common: VideoCoverAnalysisConfigCommon): VideoCoverAnalysisConfig {
        this['common'] = common;
        return this;
    }
}