

export class StepConditionResp {
    public type?: string;
    public left?: object;
    public right?: object;
    public constructor() { 
    }
    public withType(type: string): StepConditionResp {
        this['type'] = type;
        return this;
    }
    public withLeft(left: object): StepConditionResp {
        this['left'] = left;
        return this;
    }
    public withRight(right: object): StepConditionResp {
        this['right'] = right;
        return this;
    }
}