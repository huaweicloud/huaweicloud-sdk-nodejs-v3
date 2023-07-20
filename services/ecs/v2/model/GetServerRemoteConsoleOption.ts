

export class GetServerRemoteConsoleOption {
    public protocol?: GetServerRemoteConsoleOptionProtocolEnum | string;
    public type?: GetServerRemoteConsoleOptionTypeEnum | string;
    public constructor(protocol?: string, type?: string) { 
        this['protocol'] = protocol;
        this['type'] = type;
    }
    public withProtocol(protocol: GetServerRemoteConsoleOptionProtocolEnum | string): GetServerRemoteConsoleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withType(type: GetServerRemoteConsoleOptionTypeEnum | string): GetServerRemoteConsoleOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetServerRemoteConsoleOptionProtocolEnum {
    VNC = 'vnc'
}
/**
    * @export
    * @enum {string}
    */
export enum GetServerRemoteConsoleOptionTypeEnum {
    NOVNC = 'novnc'
}
