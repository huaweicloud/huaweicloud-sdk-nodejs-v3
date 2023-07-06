import { ParamsReqBean } from './ParamsReqBean';


export class ModifyTargetParamsReq {
    public group: ModifyTargetParamsReqGroupEnum;
    public params: Array<ParamsReqBean>;
    public constructor(group?: any, params?: any) { 
        this['group'] = group;
        this['params'] = params;
    }
    public withGroup(group: ModifyTargetParamsReqGroupEnum): ModifyTargetParamsReq {
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
