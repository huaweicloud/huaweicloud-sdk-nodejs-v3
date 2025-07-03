

export class ObjectFilterV2 {
    public operator?: string;
    public field?: string;
    public group?: string;
    public name?: string;
    private 'match_type'?: string;
    private 'priority_type'?: string;
    public values?: Array<object>;
    public constructor(operator?: string, field?: string, values?: Array<object>) { 
        this['operator'] = operator;
        this['field'] = field;
        this['values'] = values;
    }
    public withOperator(operator: string): ObjectFilterV2 {
        this['operator'] = operator;
        return this;
    }
    public withField(field: string): ObjectFilterV2 {
        this['field'] = field;
        return this;
    }
    public withGroup(group: string): ObjectFilterV2 {
        this['group'] = group;
        return this;
    }
    public withName(name: string): ObjectFilterV2 {
        this['name'] = name;
        return this;
    }
    public withMatchType(matchType: string): ObjectFilterV2 {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withPriorityType(priorityType: string): ObjectFilterV2 {
        this['priority_type'] = priorityType;
        return this;
    }
    public set priorityType(priorityType: string  | undefined) {
        this['priority_type'] = priorityType;
    }
    public get priorityType(): string | undefined {
        return this['priority_type'];
    }
    public withValues(values: Array<object>): ObjectFilterV2 {
        this['values'] = values;
        return this;
    }
}