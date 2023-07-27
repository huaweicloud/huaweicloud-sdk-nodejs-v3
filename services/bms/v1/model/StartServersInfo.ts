import { ServersList } from './ServersList';


export class StartServersInfo {
    public servers?: Array<ServersList>;
    public constructor(servers?: Array<ServersList>) { 
        this['servers'] = servers;
    }
    public withServers(servers: Array<ServersList>): StartServersInfo {
        this['servers'] = servers;
        return this;
    }
}