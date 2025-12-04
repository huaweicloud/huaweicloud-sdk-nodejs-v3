import { ServerKeypair } from './ServerKeypair';


export class UpdateKeypairRequestBody {
    public servers?: Array<ServerKeypair>;
    public constructor(servers?: Array<ServerKeypair>) { 
        this['servers'] = servers;
    }
    public withServers(servers: Array<ServerKeypair>): UpdateKeypairRequestBody {
        this['servers'] = servers;
        return this;
    }
}