import { ChangeBaremetalNameServer } from './ChangeBaremetalNameServer';


export class ChangeBaremetalNameBody {
    public server?: ChangeBaremetalNameServer;
    public constructor(server?: ChangeBaremetalNameServer) { 
        this['server'] = server;
    }
    public withServer(server: ChangeBaremetalNameServer): ChangeBaremetalNameBody {
        this['server'] = server;
        return this;
    }
}