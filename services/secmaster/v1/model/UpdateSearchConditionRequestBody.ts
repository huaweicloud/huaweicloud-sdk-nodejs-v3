

export class UpdateSearchConditionRequestBody {
    private 'condition_name'?: string;
    public query?: string;
    public constructor(conditionName?: string, query?: string) { 
        this['condition_name'] = conditionName;
        this['query'] = query;
    }
    public withConditionName(conditionName: string): UpdateSearchConditionRequestBody {
        this['condition_name'] = conditionName;
        return this;
    }
    public set conditionName(conditionName: string  | undefined) {
        this['condition_name'] = conditionName;
    }
    public get conditionName(): string | undefined {
        return this['condition_name'];
    }
    public withQuery(query: string): UpdateSearchConditionRequestBody {
        this['query'] = query;
        return this;
    }
}