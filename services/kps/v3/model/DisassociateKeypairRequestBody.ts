import { DisassociateEcsServerInfo } from './DisassociateEcsServerInfo';


export class DisassociateKeypairRequestBody {
    public server?: DisassociateEcsServerInfo;
    public constructor(server?: DisassociateEcsServerInfo) { 
        this['server'] = server;
    }
    public withServer(server: DisassociateEcsServerInfo): DisassociateKeypairRequestBody {
        this['server'] = server;
        return this;
    }
}