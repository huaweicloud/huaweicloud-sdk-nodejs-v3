import { DbParam } from './DbParam';


export class DbParamInfo {
    public common?: Array<DbParam>;
    public performance?: Array<DbParam>;
    public constructor() { 
    }
    public withCommon(common: Array<DbParam>): DbParamInfo {
        this['common'] = common;
        return this;
    }
    public withPerformance(performance: Array<DbParam>): DbParamInfo {
        this['performance'] = performance;
        return this;
    }
}