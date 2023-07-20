import { ParamsReqBean } from './ParamsReqBean';


export class ModifyTargetParamsReq {
    public group?: ModifyTargetParamsReqGroupEnum | string;
    public params?: Array<ParamsReqBean>;
    public constructor(group?: string, params?: Array<ParamsReqBean>) { 
        this['group'] = group;
        this['params'] = params;
    }
    public withGroup(group: ModifyTargetParamsReqGroupEnum | string): ModifyTargetParamsReq {
        this['group'] = group;
        return this;
    }
    public withParams(params: Array<ParamsReqBean>): ModifyTargetParamsReq {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyTargetParamsReqGroupEnum {
    COMMON = 'common',
    PERFORMANCE = 'performance'
}
