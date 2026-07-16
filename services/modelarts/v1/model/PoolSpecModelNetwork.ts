

export class PoolSpecModelNetwork {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PoolSpecModelNetwork {
        this['name'] = name;
        return this;
    }
}