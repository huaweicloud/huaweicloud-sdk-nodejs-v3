import { UpdateJob } from './UpdateJob';


export class UpdateJobReq {
    public type?: UpdateJobReqTypeEnum | string;
    public params?: UpdateJob;
    public constructor(type?: string, params?: UpdateJob) { 
        this['type'] = type;
        this['params'] = params;
    }
    public withType(type: UpdateJobReqTypeEnum | string): UpdateJobReq {
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
    POLICY = 'policy',
    DB_OBJECT = 'db_object',
    PRECHECK = 'precheck',
    RE_CREATE = 're_create',
    EXPIRED_DAYS = 'expired_days',
    NOTIFY = 'notify'
}
