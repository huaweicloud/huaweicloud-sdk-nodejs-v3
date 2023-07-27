import { ServersList } from './ServersList';


export class ServersInfoType {
    public type?: ServersInfoTypeTypeEnum | string;
    public servers?: Array<ServersList>;
    public constructor(type?: string, servers?: Array<ServersList>) { 
        this['type'] = type;
        this['servers'] = servers;
    }
    public withType(type: ServersInfoTypeTypeEnum | string): ServersInfoType {
        this['type'] = type;
        return this;
    }
    public withServers(servers: Array<ServersList>): ServersInfoType {
        this['servers'] = servers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServersInfoTypeTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
