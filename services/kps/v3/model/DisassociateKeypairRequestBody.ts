import { DisassociateEcsServerInfo } from './DisassociateEcsServerInfo';


export class DisassociateKeypairRequestBody {
    public server: DisassociateEcsServerInfo;
    public constructor(server?: any) { 
        this['server'] = server;
    }
    public withServer(server: DisassociateEcsServerInfo): DisassociateKeypairRequestBody {
        this['server'] = server;
        return this;
    }
}