

export class UpdateSSLSwitchRequestBody {
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): UpdateSSLSwitchRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}