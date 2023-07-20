

export class ExecutionPlanDiffAttribute {
    public name?: string;
    private 'previous_value'?: string;
    private 'target_value'?: string;
    public constructor() { 
    }
    public withName(name: string): ExecutionPlanDiffAttribute {
        this['name'] = name;
        return this;
    }
    public withPreviousValue(previousValue: string): ExecutionPlanDiffAttribute {
        this['previous_value'] = previousValue;
        return this;
    }
    public set previousValue(previousValue: string  | undefined) {
        this['previous_value'] = previousValue;
    }
    public get previousValue(): string | undefined {
        return this['previous_value'];
    }
    public withTargetValue(targetValue: string): ExecutionPlanDiffAttribute {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
}