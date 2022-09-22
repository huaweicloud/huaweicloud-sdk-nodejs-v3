

export class PremiumWafInstances {
    public id?: string;
    public name?: string;
    public accessed?: boolean;
    public constructor() { 
    }
    public withId(id: string): PremiumWafInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PremiumWafInstances {
        this['name'] = name;
        return this;
    }
    public withAccessed(accessed: boolean): PremiumWafInstances {
        this['accessed'] = accessed;
        return this;
    }
}