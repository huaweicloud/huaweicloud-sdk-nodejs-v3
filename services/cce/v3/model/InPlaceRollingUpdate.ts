

export class InPlaceRollingUpdate {
    public userDefinedStep?: number;
    public scope?: string;
    public constructor(userDefinedStep?: number) { 
        this['userDefinedStep'] = userDefinedStep;
    }
    public withUserDefinedStep(userDefinedStep: number): InPlaceRollingUpdate {
        this['userDefinedStep'] = userDefinedStep;
        return this;
    }
    public withScope(scope: string): InPlaceRollingUpdate {
        this['scope'] = scope;
        return this;
    }
}