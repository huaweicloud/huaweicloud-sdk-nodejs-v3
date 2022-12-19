

export class InPlaceRollingUpdate {
    public userDefinedStep?: number;
    public constructor() { 
    }
    public withUserDefinedStep(userDefinedStep: number): InPlaceRollingUpdate {
        this['userDefinedStep'] = userDefinedStep;
        return this;
    }
}