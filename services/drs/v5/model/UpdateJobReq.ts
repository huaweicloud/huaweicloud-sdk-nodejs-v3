import { UpdateJob } from './UpdateJob';


export class UpdateJobReq {
    public type: UpdateJobReqTypeEnum;
    public params: UpdateJob;
    public constructor(type?: any, params?: any) { 
        this['type'] = type;
        this['params'] = params;
    }
    public withType(type: UpdateJobReqTypeEnum): UpdateJobReq {
        this['type'] = type;
        return this;
    }
    public withParams(params: UpdateJob): UpdateJobReq {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateJobReqTypeEnum {
    NAME = 'name',
    DESCRIPTION = 'description',
    ALL = 'all',
    NETWORK = 'network',
    POLICY_CONFIG = 'policy_config',
    DB_OBJECT = 'db_object',
    PRECHECK = 'precheck'
}
