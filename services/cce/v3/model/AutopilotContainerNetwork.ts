

export class AutopilotContainerNetwork {
    public mode?: AutopilotContainerNetworkModeEnum | string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: AutopilotContainerNetworkModeEnum | string): AutopilotContainerNetwork {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutopilotContainerNetworkModeEnum {
    ENI = 'eni'
}
