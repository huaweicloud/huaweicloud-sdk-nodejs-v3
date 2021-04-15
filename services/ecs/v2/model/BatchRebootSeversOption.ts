import { ServerId } from './ServerId';


export class BatchRebootSeversOption {
    public servers: Array<ServerId>;
    public type: BatchRebootSeversOptionTypeEnum;
    public constructor(servers?: any, type?: any) { 
        this['servers'] = servers;
        this['type'] = type;
    }
    public withServers(servers: Array<ServerId>): BatchRebootSeversOption {
        this['servers'] = servers;
        return this;
    }
    public withType(type: BatchRebootSeversOptionTypeEnum): BatchRebootSeversOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRebootSeversOptionTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
