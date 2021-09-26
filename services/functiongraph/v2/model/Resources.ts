

export class Resources {
    public quota?: number;
    public used?: number;
    public type?: ResourcesTypeEnum;
    public unit?: string;
    public constructor() { 
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
    public withType(type: ResourcesTypeEnum): Resources {
        this['type'] = type;
        return this;
    }
    public withUnit(unit: string): Resources {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourcesTypeEnum {
    FGS_FUNC_SCALE_DOWN_TIMEOUT = 'fgs_func_scale_down_timeout',
    FGS_FUNC_OCCURS = 'fgs_func_occurs',
    FGS_FUNC_PAT_IDLE_TIME = 'fgs_func_pat_idle_time',
    FGS_FUNC_NUM = 'fgs_func_num',
    FGS_FUNC_CODE_SIZE = 'fgs_func_code_size',
    FGS_WORKFLOW_NUM = 'fgs_workflow_num'
}
