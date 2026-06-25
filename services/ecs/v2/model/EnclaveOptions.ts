

export class EnclaveOptions {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): EnclaveOptions {
        this['enabled'] = enabled;
        return this;
    }
}