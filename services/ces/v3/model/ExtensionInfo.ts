

export class ExtensionInfo {
    public name?: string;
    public status?: ExtensionInfoStatusEnum | string;
    public constructor() { 
    }
    public withName(name: string): ExtensionInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ExtensionInfoStatusEnum | string): ExtensionInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExtensionInfoStatusEnum {
    NONE = 'none',
    RUNNING = 'running',
    STOPPED = 'stopped',
    FAULT = 'fault',
    UNKNOWN = 'unknown'
}
