

export class PoolSpecCreationNetwork {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): PoolSpecCreationNetwork {
        this['name'] = name;
        return this;
    }
}