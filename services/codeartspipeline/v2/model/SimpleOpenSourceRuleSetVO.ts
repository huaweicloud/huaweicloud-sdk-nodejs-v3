

export class SimpleOpenSourceRuleSetVO {
    public id?: string;
    public name?: string;
    public level?: string;
    private 'is_valid'?: boolean;
    public version?: string;
    public operator?: string;
    private 'is_public'?: boolean;
    private 'is_legacy'?: boolean;
    private 'operate_time'?: number;
    public constructor() { 
    }
    public withId(id: string): SimpleOpenSourceRuleSetVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SimpleOpenSourceRuleSetVO {
        this['name'] = name;
        return this;
    }
    public withLevel(level: string): SimpleOpenSourceRuleSetVO {
        this['level'] = level;
        return this;
    }
    public withIsValid(isValid: boolean): SimpleOpenSourceRuleSetVO {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withVersion(version: string): SimpleOpenSourceRuleSetVO {
        this['version'] = version;
        return this;
    }
    public withOperator(operator: string): SimpleOpenSourceRuleSetVO {
        this['operator'] = operator;
        return this;
    }
    public withIsPublic(isPublic: boolean): SimpleOpenSourceRuleSetVO {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withIsLegacy(isLegacy: boolean): SimpleOpenSourceRuleSetVO {
        this['is_legacy'] = isLegacy;
        return this;
    }
    public set isLegacy(isLegacy: boolean  | undefined) {
        this['is_legacy'] = isLegacy;
    }
    public get isLegacy(): boolean | undefined {
        return this['is_legacy'];
    }
    public withOperateTime(operateTime: number): SimpleOpenSourceRuleSetVO {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: number  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): number | undefined {
        return this['operate_time'];
    }
}