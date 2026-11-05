

export class NodeconfigUpdateSpecConfigsCpuManager {
    public mode?: NodeconfigUpdateSpecConfigsCpuManagerModeEnum | string;
    public constructor() { 
    }
    public withMode(mode: NodeconfigUpdateSpecConfigsCpuManagerModeEnum | string): NodeconfigUpdateSpecConfigsCpuManager {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigUpdateSpecConfigsCpuManagerModeEnum {
    STATIC = 'static',
    NONE = 'none'
}
