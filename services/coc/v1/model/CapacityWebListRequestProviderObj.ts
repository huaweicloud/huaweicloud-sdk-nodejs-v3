

export class CapacityWebListRequestProviderObj {
    public provider?: string;
    public type?: string;
    public constructor() { 
    }
    public withProvider(provider: string): CapacityWebListRequestProviderObj {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): CapacityWebListRequestProviderObj {
        this['type'] = type;
        return this;
    }
}