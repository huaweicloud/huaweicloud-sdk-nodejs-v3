import { ServerId } from './ServerId';


export class BatchRebootSeversOption {
    public servers?: Array<ServerId>;
    public type?: BatchRebootSeversOptionTypeEnum | string;
    public constructor(servers?: Array<ServerId>, type?: string) { 
        this['servers'] = servers;
        this['type'] = type;
    }
    public withServers(servers: Array<ServerId>): BatchRebootSeversOption {
        this['servers'] = servers;
        return this;
    }
    public withType(type: BatchRebootSeversOptionTypeEnum | string): BatchRebootSeversOption {
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
