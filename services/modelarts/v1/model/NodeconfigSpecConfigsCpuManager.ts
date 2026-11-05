

export class NodeconfigSpecConfigsCpuManager {
    public mode?: string;
    public constructor() { 
    }
    public withMode(mode: string): NodeconfigSpecConfigsCpuManager {
        this['mode'] = mode;
        return this;
    }
}