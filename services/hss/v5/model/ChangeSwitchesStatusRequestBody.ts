

export class ChangeSwitchesStatusRequestBody {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): ChangeSwitchesStatusRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}