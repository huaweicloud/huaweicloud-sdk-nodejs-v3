

export class GeneralDataFilterResp {
    private 'source_filter_condition'?: string;
    private 'target_filter_condition'?: string;
    private 'condition_separated'?: string;
    public constructor() { 
    }
    public withSourceFilterCondition(sourceFilterCondition: string): GeneralDataFilterResp {
        this['source_filter_condition'] = sourceFilterCondition;
        return this;
    }
    public set sourceFilterCondition(sourceFilterCondition: string  | undefined) {
        this['source_filter_condition'] = sourceFilterCondition;
    }
    public get sourceFilterCondition(): string | undefined {
        return this['source_filter_condition'];
    }
    public withTargetFilterCondition(targetFilterCondition: string): GeneralDataFilterResp {
        this['target_filter_condition'] = targetFilterCondition;
        return this;
    }
    public set targetFilterCondition(targetFilterCondition: string  | undefined) {
        this['target_filter_condition'] = targetFilterCondition;
    }
    public get targetFilterCondition(): string | undefined {
        return this['target_filter_condition'];
    }
    public withConditionSeparated(conditionSeparated: string): GeneralDataFilterResp {
        this['condition_separated'] = conditionSeparated;
        return this;
    }
    public set conditionSeparated(conditionSeparated: string  | undefined) {
        this['condition_separated'] = conditionSeparated;
    }
    public get conditionSeparated(): string | undefined {
        return this['condition_separated'];
    }
}