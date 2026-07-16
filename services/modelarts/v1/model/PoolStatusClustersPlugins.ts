

export class PoolStatusClustersPlugins {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): PoolStatusClustersPlugins {
        this['name'] = name;
        return this;
    }
}