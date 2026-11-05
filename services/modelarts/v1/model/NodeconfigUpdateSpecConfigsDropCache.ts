

export class NodeconfigUpdateSpecConfigsDropCache {
    public mode?: NodeconfigUpdateSpecConfigsDropCacheModeEnum | string;
    public constructor() { 
    }
    public withMode(mode: NodeconfigUpdateSpecConfigsDropCacheModeEnum | string): NodeconfigUpdateSpecConfigsDropCache {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigUpdateSpecConfigsDropCacheModeEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
