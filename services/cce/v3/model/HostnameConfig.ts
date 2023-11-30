

export class HostnameConfig {
    public type?: HostnameConfigTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: HostnameConfigTypeEnum | string): HostnameConfig {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostnameConfigTypeEnum {
    PRIVATEIP = 'privateIp',
    CCENODENAME = 'cceNodeName'
}
