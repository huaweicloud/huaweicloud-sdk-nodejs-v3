import { Constraint } from './Constraint';


export class DataRequirement {
    public name?: string;
    public type?: DataRequirementTypeEnum | string;
    public conditions?: Array<Constraint>;
    public value?: { [key: string]: object; };
    private 'used_steps'?: Array<string>;
    public delay?: boolean;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): DataRequirement {
        this['name'] = name;
        return this;
    }
    public withType(type: DataRequirementTypeEnum | string): DataRequirement {
        this['type'] = type;
        return this;
    }
    public withConditions(conditions: Array<Constraint>): DataRequirement {
        this['conditions'] = conditions;
        return this;
    }
    public withValue(value: { [key: string]: object; }): DataRequirement {
        this['value'] = value;
        return this;
    }
    public withUsedSteps(usedSteps: Array<string>): DataRequirement {
        this['used_steps'] = usedSteps;
        return this;
    }
    public set usedSteps(usedSteps: Array<string>  | undefined) {
        this['used_steps'] = usedSteps;
    }
    public get usedSteps(): Array<string> | undefined {
        return this['used_steps'];
    }
    public withDelay(delay: boolean): DataRequirement {
        this['delay'] = delay;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataRequirementTypeEnum {
    DATASET = 'dataset：数据集',
    OBSOBS = 'obs：OBS文件'
}
