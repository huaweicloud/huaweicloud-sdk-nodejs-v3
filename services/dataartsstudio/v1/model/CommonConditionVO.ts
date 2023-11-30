

export class CommonConditionVO {
    public name?: string;
    private 'field_ids'?: Array<string>;
    private 'field_names'?: Array<string>;
    private 'cal_exp'?: string;
    private 'cal_fn_ids'?: Array<number>;
    private 'front_configs'?: string;
    public id?: number;
    public constructor(name?: string, fieldIds?: Array<string>, calExp?: string, calFnIds?: Array<number>) { 
        this['name'] = name;
        this['field_ids'] = fieldIds;
        this['cal_exp'] = calExp;
        this['cal_fn_ids'] = calFnIds;
    }
    public withName(name: string): CommonConditionVO {
        this['name'] = name;
        return this;
    }
    public withFieldIds(fieldIds: Array<string>): CommonConditionVO {
        this['field_ids'] = fieldIds;
        return this;
    }
    public set fieldIds(fieldIds: Array<string>  | undefined) {
        this['field_ids'] = fieldIds;
    }
    public get fieldIds(): Array<string> | undefined {
        return this['field_ids'];
    }
    public withFieldNames(fieldNames: Array<string>): CommonConditionVO {
        this['field_names'] = fieldNames;
        return this;
    }
    public set fieldNames(fieldNames: Array<string>  | undefined) {
        this['field_names'] = fieldNames;
    }
    public get fieldNames(): Array<string> | undefined {
        return this['field_names'];
    }
    public withCalExp(calExp: string): CommonConditionVO {
        this['cal_exp'] = calExp;
        return this;
    }
    public set calExp(calExp: string  | undefined) {
        this['cal_exp'] = calExp;
    }
    public get calExp(): string | undefined {
        return this['cal_exp'];
    }
    public withCalFnIds(calFnIds: Array<number>): CommonConditionVO {
        this['cal_fn_ids'] = calFnIds;
        return this;
    }
    public set calFnIds(calFnIds: Array<number>  | undefined) {
        this['cal_fn_ids'] = calFnIds;
    }
    public get calFnIds(): Array<number> | undefined {
        return this['cal_fn_ids'];
    }
    public withFrontConfigs(frontConfigs: string): CommonConditionVO {
        this['front_configs'] = frontConfigs;
        return this;
    }
    public set frontConfigs(frontConfigs: string  | undefined) {
        this['front_configs'] = frontConfigs;
    }
    public get frontConfigs(): string | undefined {
        return this['front_configs'];
    }
    public withId(id: number): CommonConditionVO {
        this['id'] = id;
        return this;
    }
}