

export class UpdateLongTermCredentialRequestBody {
    public enable?: boolean;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): UpdateLongTermCredentialRequestBody {
        this['enable'] = enable;
        return this;
    }
}