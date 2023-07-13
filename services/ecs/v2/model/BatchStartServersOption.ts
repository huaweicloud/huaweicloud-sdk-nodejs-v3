import { ServerId } from './ServerId';


export class BatchStartServersOption {
    public servers: Array<ServerId>;
    public constructor(servers?: any) { 
        this['servers'] = servers;
    }
    public withServers(servers: Array<ServerId>): BatchStartServersOption {
        this['servers'] = servers;
        return this;
    }
}