

export class UpdateTriggerRequestBody {
    public enable: string;
    public constructor(enable?: any) { 
        this['enable'] = enable;
    }
    public withEnable(enable: string): UpdateTriggerRequestBody {
        this['enable'] = enable;
        return this;
    }
}