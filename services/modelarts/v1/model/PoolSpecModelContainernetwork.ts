

export class PoolSpecModelContainernetwork {
    public mode?: string;
    public constructor() { 
    }
    public withMode(mode: string): PoolSpecModelContainernetwork {
        this['mode'] = mode;
        return this;
    }
}