

export class UpdateRuleInstance {
    public id?: string;
    private 'is_valid'?: boolean;
    public constructor() { 
    }
    public withId(id: string): UpdateRuleInstance {
        this['id'] = id;
        return this;
    }
    public withIsValid(isValid: boolean): UpdateRuleInstance {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
}