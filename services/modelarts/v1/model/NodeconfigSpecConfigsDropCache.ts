

export class NodeconfigSpecConfigsDropCache {
    public mode?: string;
    public constructor() { 
    }
    public withMode(mode: string): NodeconfigSpecConfigsDropCache {
        this['mode'] = mode;
        return this;
    }
}