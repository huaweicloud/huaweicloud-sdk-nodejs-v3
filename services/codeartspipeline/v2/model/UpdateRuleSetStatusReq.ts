

export class UpdateRuleSetStatusReq {
    private 'is_valid'?: boolean;
    public constructor(isValid?: boolean) { 
        this['is_valid'] = isValid;
    }
    public withIsValid(isValid: boolean): UpdateRuleSetStatusReq {
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