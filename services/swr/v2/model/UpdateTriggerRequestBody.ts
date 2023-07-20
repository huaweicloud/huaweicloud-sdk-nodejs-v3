

export class UpdateTriggerRequestBody {
    public enable?: string;
    public constructor(enable?: string) { 
        this['enable'] = enable;
    }
    public withEnable(enable: string): UpdateTriggerRequestBody {
        this['enable'] = enable;
        return this;
    }
}