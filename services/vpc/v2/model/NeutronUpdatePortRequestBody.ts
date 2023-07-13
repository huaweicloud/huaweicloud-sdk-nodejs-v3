import { NeutronUpdatePortOption } from './NeutronUpdatePortOption';


export class NeutronUpdatePortRequestBody {
    public port: NeutronUpdatePortOption;
    public constructor(port?: any) { 
        this['port'] = port;
    }
    public withPort(port: NeutronUpdatePortOption): NeutronUpdatePortRequestBody {
        this['port'] = port;
        return this;
    }
}