import { ServerId } from './ServerId';


export class BatchStopServersOption {
    public servers: Array<ServerId>;
    public type?: BatchStopServersOptionTypeEnum;
    public constructor(servers?: any) { 
        this['servers'] = servers;
    }
    public withServers(servers: Array<ServerId>): BatchStopServersOption {
        this['servers'] = servers;
        return this;
    }
    public withType(type: BatchStopServersOptionTypeEnum): BatchStopServersOption {
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
