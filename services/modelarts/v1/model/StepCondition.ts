

export class StepCondition {
    public type?: string;
    public left?: object;
    public right?: object;
    public constructor() { 
    }
    public withType(type: string): StepCondition {
        this['type'] = type;
        return this;
    }
    public withLeft(left: object): StepCondition {
        this['left'] = left;
        return this;
    }
    public withRight(right: object): StepCondition {
        this['right'] = right;
        return this;
    }
}