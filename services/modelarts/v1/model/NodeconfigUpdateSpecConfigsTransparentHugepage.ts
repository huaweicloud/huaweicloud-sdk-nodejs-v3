

export class NodeconfigUpdateSpecConfigsTransparentHugepage {
    public mode?: NodeconfigUpdateSpecConfigsTransparentHugepageModeEnum | string;
    public constructor() { 
    }
    public withMode(mode: NodeconfigUpdateSpecConfigsTransparentHugepageModeEnum | string): NodeconfigUpdateSpecConfigsTransparentHugepage {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigUpdateSpecConfigsTransparentHugepageModeEnum {
    ALWAYS = 'always',
    MADVISE = 'madvise',
    NEVER = 'never'
}
