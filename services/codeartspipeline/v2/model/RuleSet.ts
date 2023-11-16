

export class RuleSet {
    public id?: string;
    public name?: string;
    public type?: string;
    public version?: string;
    public operator?: string;
    private 'operate_time'?: number;
    private 'is_valid'?: boolean;
    public level?: string;
    private 'is_public'?: boolean;
    public constructor(id?: string, name?: string, type?: string, operator?: string, operateTime?: number, isValid?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['operator'] = operator;
        this['operate_time'] = operateTime;
        this['is_valid'] = isValid;
    }
    public withId(id: string): RuleSet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RuleSet {
        this['name'] = name;
        return this;
    }
    public withType(type: string): RuleSet {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): RuleSet {
        this['version'] = version;
        return this;
    }
    public withOperator(operator: string): RuleSet {
        this['operator'] = operator;
        return this;
    }
    public withOperateTime(operateTime: number): RuleSet {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: number  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): number | undefined {
        return this['operate_time'];
    }
    public withIsValid(isValid: boolean): RuleSet {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withLevel(level: string): RuleSet {
        this['level'] = level;
        return this;
    }
    public withIsPublic(isPublic: boolean): RuleSet {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
}