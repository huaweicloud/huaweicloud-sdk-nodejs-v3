import { VideoCuttingConfigCommon } from './VideoCuttingConfigCommon';


export class VideoCuttingConfig {
    public common?: VideoCuttingConfigCommon;
    public constructor() { 
    }
    public withCommon(common: VideoCuttingConfigCommon): VideoCuttingConfig {
        this['common'] = common;
        return this;
    }
}