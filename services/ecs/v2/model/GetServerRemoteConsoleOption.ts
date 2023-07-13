

export class GetServerRemoteConsoleOption {
    public protocol: GetServerRemoteConsoleOptionProtocolEnum;
    public type: GetServerRemoteConsoleOptionTypeEnum;
    public constructor(protocol?: any, type?: any) { 
        this['protocol'] = protocol;
        this['type'] = type;
    }
    public withProtocol(protocol: GetServerRemoteConsoleOptionProtocolEnum): GetServerRemoteConsoleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withType(type: GetServerRemoteConsoleOptionTypeEnum): GetServerRemoteConsoleOption {
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
