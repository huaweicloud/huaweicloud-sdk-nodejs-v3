import { ConstraintResp } from './ConstraintResp';


export class DataRequirementResp {
    public name?: string;
    public type?: DataRequirementRespTypeEnum | string;
    public conditions?: Array<ConstraintResp>;
    public value?: { [key: string]: object; };
    private 'used_steps'?: Array<string>;
    public delay?: boolean;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): DataRequirementResp {
        this['name'] = name;
        return this;
    }
    public withType(type: DataRequirementRespTypeEnum | string): DataRequirementResp {
        this['type'] = type;
        return this;
    }
    public withConditions(conditions: Array<ConstraintResp>): DataRequirementResp {
        this['conditions'] = conditions;
        return this;
    }
    public withValue(value: { [key: string]: object; }): DataRequirementResp {
        this['value'] = value;
        return this;
    }
    public withUsedSteps(usedSteps: Array<string>): DataRequirementResp {
        this['used_steps'] = usedSteps;
        return this;
    }
    public set usedSteps(usedSteps: Array<string>  | undefined) {
        this['used_steps'] = usedSteps;
    }
    public get usedSteps(): Array<string> | undefined {
        return this['used_steps'];
    }
    public withDelay(delay: boolean): DataRequirementResp {
        this['delay'] = delay;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataRequirementRespTypeEnum {
    DATASET = 'dataset：数据集',
    OBSOBS = 'obs：OBS文件'
}
