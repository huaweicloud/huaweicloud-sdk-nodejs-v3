import { ServersList } from './ServersList';


export class OsStopBodyType {
    public type?: OsStopBodyTypeTypeEnum | string;
    public servers?: Array<ServersList>;
    public constructor(servers?: Array<ServersList>) { 
        this['servers'] = servers;
    }
    public withType(type: OsStopBodyTypeTypeEnum | string): OsStopBodyType {
        this['type'] = type;
        return this;
    }
    public withServers(servers: Array<ServersList>): OsStopBodyType {
        this['servers'] = servers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OsStopBodyTypeTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
