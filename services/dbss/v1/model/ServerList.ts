import { ResponseServer } from './ResponseServer';


export class ServerList {
    public server?: Array<ResponseServer>;
    public total?: number;
    public constructor() { 
    }
    public withServer(server: Array<ResponseServer>): ServerList {
        this['server'] = server;
        return this;
    }
    public withTotal(total: number): ServerList {
        this['total'] = total;
        return this;
    }
}