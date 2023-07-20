import { Trigger } from './Trigger';


export class Rule {
    public name?: string;
    public description?: string;
    private 'adjustment_type'?: RuleAdjustmentTypeEnum | string;
    private 'cool_down_minutes'?: number;
    private 'scaling_adjustment'?: number;
    public trigger?: Trigger;
    public constructor(name?: string, adjustmentType?: string, coolDownMinutes?: number, scalingAdjustment?: number, trigger?: Trigger) { 
        this['name'] = name;
        this['adjustment_type'] = adjustmentType;
        this['cool_down_minutes'] = coolDownMinutes;
        this['scaling_adjustment'] = scalingAdjustment;
        this['trigger'] = trigger;
    }
    public withName(name: string): Rule {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Rule {
        this['description'] = description;
        return this;
    }
    public withAdjustmentType(adjustmentType: RuleAdjustmentTypeEnum | string): Rule {
        this['adjustment_type'] = adjustmentType;
        return this;
    }
    public set adjustmentType(adjustmentType: RuleAdjustmentTypeEnum | string  | undefined) {
        this['adjustment_type'] = adjustmentType;
    }
    public get adjustmentType(): RuleAdjustmentTypeEnum | string | undefined {
        return this['adjustment_type'];
    }
    public withCoolDownMinutes(coolDownMinutes: number): Rule {
        this['cool_down_minutes'] = coolDownMinutes;
        return this;
    }
    public set coolDownMinutes(coolDownMinutes: number  | undefined) {
        this['cool_down_minutes'] = coolDownMinutes;
    }
    public get coolDownMinutes(): number | undefined {
        return this['cool_down_minutes'];
    }
    public withScalingAdjustment(scalingAdjustment: number): Rule {
        this['scaling_adjustment'] = scalingAdjustment;
        return this;
    }
    public set scalingAdjustment(scalingAdjustment: number  | undefined) {
        this['scaling_adjustment'] = scalingAdjustment;
    }
    public get scalingAdjustment(): number | undefined {
        return this['scaling_adjustment'];
    }
    public withTrigger(trigger: Trigger): Rule {
        this['trigger'] = trigger;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuleAdjustmentTypeEnum {
    SCALE_OUT = 'scale_out',
    SCALE_IN = 'scale_in'
}
