

export class EnclaveOptions {
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): EnclaveOptions {
        this['enabled'] = enabled;
        return this;
    }
}