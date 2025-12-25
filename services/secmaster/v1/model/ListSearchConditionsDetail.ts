

export class ListSearchConditionsDetail {
    private 'condition_id'?: string;
    private 'condition_name'?: string;
    public constructor(conditionId?: string, conditionName?: string) { 
        this['condition_id'] = conditionId;
        this['condition_name'] = conditionName;
    }
    public withConditionId(conditionId: string): ListSearchConditionsDetail {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
    public withConditionName(conditionName: string): ListSearchConditionsDetail {
        this['condition_name'] = conditionName;
        return this;
    }
    public set conditionName(conditionName: string  | undefined) {
        this['condition_name'] = conditionName;
    }
    public get conditionName(): string | undefined {
        return this['condition_name'];
    }
}