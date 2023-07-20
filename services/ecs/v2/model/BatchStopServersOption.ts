import { ServerId } from './ServerId';


export class BatchStopServersOption {
    public servers?: Array<ServerId>;
    public type?: BatchStopServersOptionTypeEnum | string;
    public constructor(servers?: Array<ServerId>) { 
        this['servers'] = servers;
    }
    public withServers(servers: Array<ServerId>): BatchStopServersOption {
        this['servers'] = servers;
        return this;
    }
    public withType(type: BatchStopServersOptionTypeEnum | string): BatchStopServersOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchStopServersOptionTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
