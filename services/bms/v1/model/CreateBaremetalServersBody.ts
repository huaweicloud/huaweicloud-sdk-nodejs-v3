import { CreateServers } from './CreateServers';


export class CreateBaremetalServersBody {
    public server?: CreateServers;
    public constructor(server?: CreateServers) { 
        this['server'] = server;
    }
    public withServer(server: CreateServers): CreateBaremetalServersBody {
        this['server'] = server;
        return this;
    }
}